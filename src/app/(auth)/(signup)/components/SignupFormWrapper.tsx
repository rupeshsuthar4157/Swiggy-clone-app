"use client";

import React, { useState } from "react";
import LoginWithEmail from "@/app/(auth)/(login)/components/LoginWithEmail"
import SignupForm from "./Signup";

export default function SignupFormWrapper() {
  const [isCreateAccount, setIsCreateAccount] = useState(true);

  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-row bg-muted/40">
      {isCreateAccount ? (
        <SignupForm setIsCreateAccount={setIsCreateAccount} />
      ) : (
        <LoginWithEmail setIsCreateAccount={setIsCreateAccount} />
      )}
    </div>
  );
}
