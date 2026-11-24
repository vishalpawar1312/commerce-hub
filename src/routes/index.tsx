import AdminLayout from "@/layouts/AdminLayout";
import CustomerLayout from "@/layouts/CustomerLayout";
import HomePage from "@/pages/customer/HomePage";
import LoginPage from "@/pages/customer/LoginPage";
import AdminLogin from "@/pages/admin/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardPage from "@/pages/admin/DashboardPage";
import UsersPage from "@/pages/admin/UsersPage";
import UserDetailsPage from "@/pages/admin/UserDetailsPage";
import EditUserPage from "@/pages/admin/EditUserPage";
import OrdersPage from "@/pages/admin/OrdersPage/OrdersPage";
import OrderDetailsPage from "@/pages/admin/OrdersPage/OrderDetailsPage";
import CartPage from "@/pages/customer/CartPage";
import CheckoutPage from "@/pages/customer/CheckoutPage";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute allowedRole="customer" />}>
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            {/* Only protecred pages element should be here */}
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />
          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/:userId" element={<UserDetailsPage />} />
            <Route path="users/:userId/edit" element={<EditUserPage />}/>
            <Route path="orders" element={<OrdersPage />}/>
            <Route path="orders/:orderId" element={<OrderDetailsPage />}/>
            {/* Other Protected routes here */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}