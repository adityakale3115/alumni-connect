import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/student" },
    { name: "Mentors", path: "/mentors" },
    { name: "Resources", path: "/resources" },
    { name: "Alumni Directory", path: "/directory" },
    { name: "Events", path: "/events" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-6 hidden md:block">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="block py-2 px-4 rounded hover:bg-gray-100 font-medium text-gray-700"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
