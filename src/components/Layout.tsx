import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Nav";
// import Footer from "./Footer";
import CompareModal from "./CompareModal";
import { useSelector } from "react-redux";

function Layout() {
  const location = useLocation();
  const value = useSelector((state: any) => state.compareSlice.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Nav />
      <Outlet />
      {value && <CompareModal />}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
