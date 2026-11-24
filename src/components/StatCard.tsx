
interface StatCardProps {
  title: string,
  value: string
}
export default function StatCard({title, value}: StatCardProps) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  )
}
