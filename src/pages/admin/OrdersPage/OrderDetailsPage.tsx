import { type OrderStatus, selectOrderById, updateOrderStatus } from "@/store/slices/ordersSlice";
import "./OrderDetailsPage.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";


const OrderDetailsPage = () => {

  const { orderId } = useParams();
  const order = useAppSelector(state =>
    selectOrderById(state, orderId ?? "")
  )

  const navigate = useNavigate();
  const handleBackToOrders = () => {
    navigate("/admin/orders")
  }

  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | "">(order?.status ?? "")

  const dispatch = useAppDispatch();

  const handleUpdateStatus = () => {
    if (!orderId || !selectedStatus) return;
    dispatch(updateOrderStatus(
      {
        orderId,
        status: selectedStatus
      }
    ))
  }

  let availableStatuses: OrderStatus[] = [];
  if (order?.status === "Pending") {
    availableStatuses = ["Shipped", "Delivered", "Cancelled"]
  } else if (order?.status === "Shipped") {
    availableStatuses = ["Delivered"]
  }



  return (
    <div className="orderDetailsPage">
      <div className="pageHeader">
        <h1>Order Details</h1>
        <p>View and manage order information</p>
      </div>

      <div className="orderDetailsCard">
        <div className="detailRow">
          <span className="detailLabel">Order ID</span>
          <span>{order?.id}</span>
        </div>

        <div className="detailRow">
          <span className="detailLabel">Customer</span>
          <span>{order?.customer}</span>
        </div>

        <div className="detailRow">
          <span className="detailLabel">Amount</span>
          <span>{order?.amount}</span>
        </div>

        <div className="detailRow">
          <span className="detailLabel">Status</span>

          {availableStatuses.length > 0 && (
            <>
              <select
                value={selectedStatus}
                onChange={(event) =>
                  setSelectedStatus(event.target.value as OrderStatus)
                }
              >
                {availableStatuses.map((status) => (<option key={status} value={status}>{status}</option>))}
              </select>
              <button
                type="button"
                onClick={handleUpdateStatus}
                disabled={!selectedStatus}

              >
                Update Status
              </button>
            </>
          )}
        </div>
      </div>

      <div className="pageActions">
        <button
          type="button"
          onClick={handleBackToOrders}
        >
          Back to Orders
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsPage;