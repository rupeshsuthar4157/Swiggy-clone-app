"use client";
import React, { useState } from "react";
import LoginForm from "@/app/(auth)/(login)/components/LoginWithEmail";
import SignupForm from "@/app/(auth)/(signup)/components/Signup";

interface SignupLoginFormProps {
  isCreateAccount: boolean;
  setIsCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignupLoginForm({
  isCreateAccount,
  setIsCreateAccount,
}: SignupLoginFormProps) {
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
