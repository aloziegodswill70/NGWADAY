"use client"

import { signIn } from "next-auth/react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ngwaBlack text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-ngwaGold mb-6">Create Your Account</h1>
        <p className="mb-6 text-gray-300">
          Join Ngwa Day Online with your Google account
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 bg-ngwaRed py-3 rounded-lg font-bold hover:bg-red-700"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="mt-6 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-ngwaGreen font-bold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
