"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButtons() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex gap-2">
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()} className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn("google")} className="bg-blue-500 text-white px-3 py-1 rounded">
      Login with Google
    </button>
  )
}
