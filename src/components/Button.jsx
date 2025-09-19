export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
    >
      {children}
    </button>
  );
}
