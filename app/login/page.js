"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ngwaBlack text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-ngwaGold mb-6">Welcome Back</h1>
        <p className="mb-6 text-gray-300">
          Login with your Google account to access the dashboard
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 bg-ngwaGreen py-3 rounded-lg font-bold hover:bg-green-700"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="mt-6 text-gray-400">
          New here?{" "}
          <a href="/register" className="text-ngwaRed font-bold hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}
