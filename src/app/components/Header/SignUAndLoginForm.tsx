"use client";
import React, { useState } from "react";
import LoginForm from "@/app/(auth)/(login)/components/LoginWithEmail"
import SignupForm from "@/app/(auth)/(signup)/components/Signup"

interface Props { }

export default function AuthFormWrapper(props: Props) {
    const [isCreateAccount, setIsCreateAccount] = useState(false);

    return (
        <div className="p-6 flex flex-col items-start">
            {!isCreateAccount ? (
                <LoginForm setIsCreateAccount={setIsCreateAccount} />
            ) : (
                <SignupForm setIsCreateAccount={setIsCreateAccount} />
            )}
        </div>
    );
}
