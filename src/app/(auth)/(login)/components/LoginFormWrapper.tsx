"use client";

import React, { useState } from "react";
import LoginWithEmail from "../components/LoginWithEmail";
import SignupForm from "@/app/(auth)/(signup)/components/Signup";

export default function LoginFormWrapper() {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-row bg-muted/40">
      {!isCreateAccount ? (
        <LoginWithEmail setIsCreateAccount={setIsCreateAccount} />
      ) : (
        <SignupForm setIsCreateAccount={setIsCreateAccount} />
      )}
    </div>
  );
}
