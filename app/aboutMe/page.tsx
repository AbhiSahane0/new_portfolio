import { redirect } from "next/navigation";

// The portfolio is now a single-page experience; preserve old links.
export default function AboutMeRedirect() {
  redirect("/#about");
}
