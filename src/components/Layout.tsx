import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CompareModal from "./CompareModal";

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      {/* <CompareModal /> */}
      <Footer />
    </div>
  );
}

export default Layout;
