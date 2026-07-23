# Contact-form backend (Supabase)

The contact form writes messages to a `feedbacks` table in Supabase. After your
old project was deleted you need to point the site at the **new** project and
recreate the table. Do it once:

## 1. Add your new project keys to `.env.local`

In the Supabase dashboard: **Project Settings → API**, copy the **Project URL**
and the **anon public** key, then set them at the repo root in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

> The `anon` key is meant to be used in the browser — that's fine. Never put the
> `service_role` key here.

## 2. Create the table + security

Open **SQL Editor → New query**, paste the contents of
[`contact_form.sql`](./contact_form.sql), and click **Run**.

This creates the `feedbacks` table and turns on Row Level Security so the public
key can **only insert** messages — it can never read, edit, or delete them.

## 3. Restart the dev server

```bash
npm run dev
```

Next.js only reads `.env.local` at startup, so restart after changing it.

## 4. Test

Submit the contact form on the site, then check **Table Editor → feedbacks** in
Supabase — your message should be there. You read submissions from the dashboard
(the public key can't read them back).

## Optional: get emailed on new messages

Supabase → **Database → Webhooks** → create a webhook on `feedbacks` (INSERT)
that calls an Edge Function which sends you an email (e.g. via Resend). Ask and I
can wire that up.
