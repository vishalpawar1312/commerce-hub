import RecentOrders from "@/components/RecentOrders";
import StatCard from "@/components/StatCard"


const stats = [
  {
    title: "Total Users",
    value: "2029"
  },
  {
    title: "Total Orders",
    value: "229"
  },
  {
    title: "Revenue",
    value: "45K"
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John",
    amount: "₹2,500",
    status: "Completed",
  },
  {
    id: "ORD-002",
    customer: "Sarah",
    amount: "₹1,200",
    status: "Pending",
  },
  {
    id: "ORD-003",
    customer: "Mike",
    amount: "₹3,400",
    status: "Cancelled",
  },
];


export default function DashboardPage() {
  return (
    <>
    <div className="stats-grid">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
    <RecentOrders orders={recentOrders}/>
    </>
  )
}
