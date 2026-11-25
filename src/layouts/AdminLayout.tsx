import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

export default function AdminLayout() {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(true)
  const handleClickLogout = ()=> {
    logout();
    navigate("login")
    setLoggedIn(false);
  }
  return (
    <div className="adminLayout">
      <header>Admin Layout
       {loggedIn && <button onClick={handleClickLogout}>Logout</button>}
      </header>
      <aside>
        <p className="sidebarTitle">Menu</p>
        <nav className="sidebarNav">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/orders">Orders</NavLink>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
      <footer>© 2026 Commerce Hub</footer>
    </div>
  );
}