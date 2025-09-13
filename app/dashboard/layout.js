import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-ngwaBlack text-white py-12 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-ngwaGold">Dashboard</h1>

        <div className="flex items-center gap-4">
          {/* User Avatar */}
          {user?.image && (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={40}
              height={40}
              className="rounded-full border-2 border-ngwaGold"
            />
          )}
          {/* User Name */}
          <span className="text-gray-300">{user?.name || "User"}</span>
          {/* Logout */}
          <LogoutButton />
        </div>
      </div>

      {/* Page content */}
      {children({ user })}
    </div>
  );
}
