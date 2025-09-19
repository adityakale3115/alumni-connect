export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Alumni Platform</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Home</button>
        <button className="text-gray-600 hover:text-gray-800">Profile</button>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </div>
    </nav>
  );
}
