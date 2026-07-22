-- ============================================================================
--  Portfolio · Contact-form backend for Supabase
--  ---------------------------------------------------------------------------
--  Run this ONCE in your NEW project:
--    Supabase Dashboard → SQL Editor → New query → paste this → Run.
--
--  It creates the `feedbacks` table the contact form writes to, locks it down
--  with Row Level Security so the public anon key can ONLY insert (never read,
--  edit, or delete), and grants the minimum privileges needed.
-- ============================================================================

-- 1) Table -------------------------------------------------------------------
create table if not exists public.feedbacks (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  message    text        not null,
  created_at timestamptz not null default now(),

  -- Basic size/shape guards so the public endpoint can't be stuffed with junk.
  constraint feedbacks_name_len
    check (char_length(trim(name)) between 1 and 120),
  constraint feedbacks_email_shape
    check (email ~* '^\S+@\S+\.\S+$' and char_length(email) <= 200),
  constraint feedbacks_message_len
    check (char_length(trim(message)) between 1 and 5000)
);

comment on table public.feedbacks is
  'Messages submitted from the portfolio contact form.';

-- Review submissions newest-first quickly.
create index if not exists feedbacks_created_at_idx
  on public.feedbacks (created_at desc);

-- 2) Row Level Security ------------------------------------------------------
alter table public.feedbacks enable row level security;

-- Anyone holding the public anon key may SUBMIT (insert only).
drop policy if exists "public can submit feedback" on public.feedbacks;
create policy "public can submit feedback"
  on public.feedbacks
  for insert
  to anon, authenticated
  with check (true);

-- On purpose there is NO select / update / delete policy:
--   → the anon key can insert but can never read, change, or delete rows.
--   → you read messages from the Dashboard's Table Editor, or via the
--     service_role key — both bypass RLS.

-- 3) Privileges --------------------------------------------------------------
grant usage  on schema public       to anon, authenticated;
grant insert on public.feedbacks    to anon, authenticated;

-- ============================================================================
--  Done. Test it from the SQL editor (simulates an anonymous submit):
--
--    insert into public.feedbacks (name, email, message)
--    values ('Test User', 'test@example.com', 'Hello from SQL!');
--
--  Then check: Dashboard → Table Editor → feedbacks.
-- ============================================================================
