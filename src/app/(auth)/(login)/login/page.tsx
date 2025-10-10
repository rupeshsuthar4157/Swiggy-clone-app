import { redirect } from "next/navigation";
import { getSession } from "@/businessLogic/web/auth/session/session"
import LoginWithEmail from "../components/LoginWithEmail";
import { route } from "@/businessLogic/web/routes/route";

export const metadata = {
    title: "Login",
    description: "This is the login page",
};
export default async function Login() {
    const session = await getSession();
    if (session) redirect(route.home);
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-row bg-muted/40">
            <LoginWithEmail setIsCreateAccount={function (value: boolean): void {
                throw new Error("Function not implemented.");
            }} />
        </div>
    );
}
