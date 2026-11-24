import {type RootState } from './../store';
import { createSlice } from "@reduxjs/toolkit";

export type OrderStatus =
  | "Pending"
  | "Cancelled"
  | "Shipped"
  | "Delivered";

interface Order {
  id: string;
  customer: string;
  amount: number;
  status: OrderStatus;
}
export type OrderStatusFilter  = OrderStatus | "All"

const initialState: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    amount: 1200,
    status: "Delivered",
  },
  {
    id: "ORD-002",
    customer: "Sarah",
    amount: 850,
    status: "Pending",
  },
  {
    id: "ORD-003",
    customer: "Mike",
    amount: 2400,
    status: "Shipped",
  },
];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrderStatus: (state, action)=> {
      const {orderId, status} = action.payload;
      const index = state.findIndex(order => order.id === orderId)
      if(index !== -1){
        const currentStatus = state[index].status
        const isAllowed = status ==="Shipped" && currentStatus === "Pending" || status ==="Delivered" && currentStatus === "Pending" ||  currentStatus === "Pending" && status === "Cancelled" || status ==="Delivered" && currentStatus === "Shipped"
        const noUpdate = status === currentStatus;
        if(isAllowed && !noUpdate) {
          state[index].status = status;
        }
      }
    }
  },
});
export const selectFilteredOrders = (
  state: RootState,
  search: string,
  status: OrderStatusFilter
) => {
  const normalizedSearch = search.toLowerCase();

  return state.orders.filter(
    (order) =>
      (
        order.id.toLowerCase().includes(normalizedSearch) ||
        order.customer.toLowerCase().includes(normalizedSearch)
      ) &&
      (order.status === status || status === "All")
  );
};

export const selectOrderById = (
  state: RootState,
  orderId: string
) => (
  state.orders.find((order)=> order.id === orderId)
)

export const { updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;