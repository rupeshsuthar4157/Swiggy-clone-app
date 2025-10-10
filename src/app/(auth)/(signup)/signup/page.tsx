import React from "react";
import { getSession } from "@/businessLogic/web/auth/session/session"
import { route } from "@/businessLogic/web/routes/route";
import { redirect } from "next/navigation";
import SignUp from "@/app/(auth)/(signup)//components/Signup";

export const metadata = {
    title: "Sign Up",
};
export default async function singUp() {
    const session = await getSession();
    if (session) redirect(route.home);
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-row bg-muted/40">
            <SignUp setIsCreateAccount={function (value: boolean): void {
                throw new Error("Function not implemented.");
            }} />
        </div>
    );
}
