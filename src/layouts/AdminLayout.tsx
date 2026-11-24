import { Outlet, useNavigate } from "react-router-dom";
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
    <>
      <header>Admin Layout
       {loggedIn && <button onClick={handleClickLogout}>Logout</button>}
      </header>
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}