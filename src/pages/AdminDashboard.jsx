export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🛠 Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          Manage Alumni Profiles
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          Upload Data (CSV Import)
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          Analytics Dashboard
        </div>
      </div>
    </div>
  );
}
