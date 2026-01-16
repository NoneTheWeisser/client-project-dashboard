export default function DevelopmentKPI({ title, value, color = "blue" }) {
  return (
    <div className={`kpi-card kpi-${color}`}>
      <div className="kpi-title development">{title}</div>
      <div className="kpi-value development">{value}</div>
    </div>
  );
}
