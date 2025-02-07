import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
