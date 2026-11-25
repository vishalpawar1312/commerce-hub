import {NavLink, Outlet} from "react-router-dom"
export default function CustomerLayout() {
  return (
    <div className="customerLayout">
      <header>Customer Layout</header>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>© 2026 Commerce Hub</footer>
    </div>
  )
}
