export default function Card({ title, icon, children }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col space-y-3">
      {icon && <span className="text-3xl">{icon}</span>}
      <h2 className="text-lg font-semibold">{title}</h2>
      {children && <div className="text-gray-600">{children}</div>}
    </div>
  );
}
