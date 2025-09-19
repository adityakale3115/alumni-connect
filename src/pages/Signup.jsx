export default function Signup() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-2xl w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 border rounded-lg"
        />
        <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Register
        </button>
      </div>
    </div>
  );
}
