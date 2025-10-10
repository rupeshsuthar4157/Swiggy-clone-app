/**
 * @author Suresh Jangid
 * @LastModified Thu Oct 9-10-2025 AT 12:30:00 PM
 */

"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { route } from "@/businessLogic/web/routes/route";
import { useRouter } from "next/navigation";
import { Signup } from "@/businessLogic/web/auth/signup/action/signup";
import { useMutation } from "@tanstack/react-query";

interface SignupFormProps {
    setIsCreateAccount: (value: boolean) => void;
}

export default function SignupForm({ setIsCreateAccount }: SignupFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const registerMutation = useMutation({
        mutationKey: ["register"],
        mutationFn: async (payload: { name: string; email: string; phone: string; password: string }) =>
            Signup(payload),
        onSuccess: (data) => {
            if (data?.type === "success") {
                toast.success("Registered successfully");
                setTimeout(() => {
                    router.push(route.home);
                }, 1000);
            } else {
                toast.error(data?.message || "Something went wrong");
            }
        },
        onError: (err: any) => {
            toast.error(err?.message || "Something went wrong");
        },
    });

    const handleSignup = () => {
        if (!name.trim()) {
            toast.error("Please enter your name");
            return;
        }
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }
        if (!phone.trim() || !/^[0-9]{10}$/.test(phone)) {
            toast.error("Please enter a valid 10-digit phone number");
            return;
        }
        if (!password.trim() || password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        const values = { name, email, phone, password };

        setLoading(true);
        registerMutation.mutate(values, {
            onSettled: () => setLoading(false),
        });
    };

    return (
        <>
            <Image
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                alt="Signup Banner"
                height={200}
                width={400}
                className="w-full max-h-20 object-contain mb-6"
            />

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <h2 className="text-xl md:text-2xl text-black font-bold mb-1">Signup</h2>
            <p
                className="text-[#FF5210] text-sm font-semibold mb-4 cursor-pointer"
                onClick={() => setIsCreateAccount(false)}
            >
                <span className="text-black">or</span> go back to Login
            </p>

            <div className="w-full h-0.5 bg-black mb-4"></div>

            <div className="relative w-full mb-4">
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                    placeholder="Full Name"
                />
                <label
                    htmlFor="name"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                >
                    Full Name
                </label>
            </div>

            <div className="relative w-full mb-4">
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                    placeholder="Email"
                />
                <label
                    htmlFor="email"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                >
                    Email
                </label>
            </div>

            <div className="relative w-full mb-4">
                <input
                    type="tel"
                    id="signupPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                    placeholder="Phone number"
                />
                <label
                    htmlFor="signupPhone"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                >
                    Phone number
                </label>
            </div>

            <div className="relative w-full mb-4">
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                    placeholder="Password"
                />
                <label
                    htmlFor="password"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                >
                    Password
                </label>
            </div>

            <button
                onClick={handleSignup}
                className="mt-6 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md"
                disabled={loading}
            >
                {loading ? "Please wait..." : "Create Account"}
            </button>
        </>
    );
}
