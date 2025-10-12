import { redirect } from "next/navigation";
import { getSession } from "@/businessLogic/web/auth/session/session";
import { route } from "@/businessLogic/web/routes/route";
import LoginFormWrapper from "../components/LoginFormWrapper";

export const metadata = {
  title: "Login",
  description: "This is the login page",
};

export default async function Login() {
  const session = await getSession();
  if (session) redirect(route.home);

  return <LoginFormWrapper />;
}
