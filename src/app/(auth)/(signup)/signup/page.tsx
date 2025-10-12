import { redirect } from "next/navigation";
import { getSession } from "@/businessLogic/web/auth/session/session";
import { route } from "@/businessLogic/web/routes/route";
import SignupFormWrapper from "../components/SignupFormWrapper";

export const metadata = {
  title: "Sign Up",
};

export default async function SignupPage() {
  const session = await getSession();
  if (session) redirect(route.home);

  return <SignupFormWrapper />;
}
