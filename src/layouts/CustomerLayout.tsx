import {Outlet} from "react-router-dom"
export default function CustomerLayout() {
  return (
    <>
      <header>Customer Layout</header>
      <nav>Navbar</nav>
      <main>
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  )
}
