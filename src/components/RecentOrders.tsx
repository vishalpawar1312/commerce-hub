

interface Order {
  id: string;
  customer: string;
  amount: string;
  status: string;
}
interface RecentOrdersProps {
  orders : Order[]
}

export default function RecentOrders({orders}: RecentOrdersProps) {
  return (
    <div className="recentOrder">
      <div className="sectionHeading">Recent Orders</div>
      <div className="table">
        <div className="tableheader">
          <div className="first">Order ID</div>
          <div className="second">Customer</div>
          <div className="third">Amount</div>
          <div className="forth">Status</div>
        </div>

        {orders.map((order) => (
          <div className="tableRow" key={order.id}>
            <div className="first">{order.id}</div>
            <div className="second">{order.customer}</div>
            <div className="third">{order.amount}</div>
            <div className="forth">{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
