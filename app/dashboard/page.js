export default function DashboardPage({ user }) {
  return (
    <div>
      <p className="text-gray-300">
        Welcome, {user?.name || "User"} 🎉 <br />
        <span className="text-sm text-gray-400">{user?.email}</span>
      </p>
    </div>
  );
}
