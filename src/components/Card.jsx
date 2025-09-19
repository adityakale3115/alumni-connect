import "./card.css";

export default function Card({ title, icon, children }) {
  return (
    <div className="card">
      {icon && <span className="card-icon">{icon}</span>}
      <h2 className="card-title">{title}</h2>
      {children && <div className="card-body">{children}</div>}
    </div>
  );
}
