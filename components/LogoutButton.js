"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="px-4 py-2 bg-ngwaRed text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
