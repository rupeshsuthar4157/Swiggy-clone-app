/**
 * @author Suresh Jangid
 * @LastModified Thu Oct 9-10-2025 AT 4:9:00 PM
 * 
 */

"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/businessLogic/web/auth/login/action/login";
import { useRouter } from "next/navigation";
import { route } from "@/businessLogic/web/routes/route";

interface LoginFormProps {
    setIsCreateAccount: (value: boolean) => void;
}

interface ILoginWithEmailPayload {
    email: string;
    password: string;
}

export default function LoginForm({ setIsCreateAccount }: LoginFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: async (payload: ILoginWithEmailPayload) =>
            login({
                email: payload.email,
                password: payload.password,
            }),
        onSuccess: (data) => {
            if (data?.type === "success") {
                toast.success("Login successfully");
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter a valid email and password");
            return;
        }

        setLoading(true);
        loginMutation.mutate(
            { email, password },
            {
                onSettled: () => setLoading(false),
            }
        );
    };

    return (
        <>
            <Image
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                alt="Login Banner"
                height={200}
                width={400}
                className="w-full max-h-34 object-contain mb-6"
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <h2 className="text-xl md:text-2xl text-black font-bold mb-1">Login</h2>
            <p
                className="text-[#FF5210] text-sm font-semibold mb-4 cursor-pointer"
                onClick={() => setIsCreateAccount(true)}
            >
                <span className="text-black">or</span> create an account
            </p>

            <div className="w-full h-0.5 bg-black mb-4"></div>

            <form onSubmit={handleSubmit} className="w-full">
                <div className="relative w-full mt-4">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                        className="peer w-full rounded-xl border border-gray-300 bg-white px-4 pt-5 pb-2 text-base text-gray-800 placeholder-transparent shadow-sm transition-all duration-200 ease-in-out focus:border-[#FF6F00] focus:ring-2 focus:ring-[#FF6F00]/40 focus:outline-none"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base  transition-all duration-200 ease-in-out 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 
                        peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF6F00]"
                    >
                        Email Address
                    </label>
                </div>


                <div className="relative mt-4 w-full">
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
                    type="submit"
                    className="mt-6 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md"
                    disabled={loading}
                >
                    {loading ? "Please wait..." : "Login"}
                </button>
            </form>
        </>
    );
}
