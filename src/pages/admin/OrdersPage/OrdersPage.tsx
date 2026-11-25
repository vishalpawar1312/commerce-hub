import { useState } from "react";
import "./OrdersPage.scss";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectFilteredOrders,type OrderStatusFilter } from "@/store/slices/ordersSlice";
import { useNavigate } from "react-router-dom";



const OrdersPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<OrderStatusFilter>("All");
  // memoize this selector later using createSelector in slice
  const orders = useAppSelector((state)=> selectFilteredOrders(state, search, status));
  const navigate = useNavigate();
  const handleViewOrder =(orderId: string)=> {
    navigate(orderId)
  }
  return (
    <div className="ordersPage">
      <h1>Orders</h1>

      <p>Manage and track customer orders</p>

      <div className="ordersControls">number comp , , design for it , time for those compoenents,  where used comp teams MFE
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={status}
          onChange={(event:React.ChangeEvent<HTMLSelectElement>) => setStatus(event.target.value as OrderStatusFilter)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="tableContainer">
      <table className="ordersTable">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>₹{order.amount}</td>
              <td><span className={`statusBadge status${order.status}`}>{order.status}</span></td>
              <td>
                <button onClick={() => handleViewOrder(order.id)} type="button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default OrdersPage;