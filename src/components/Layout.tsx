import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CompareModal from "./CompareModal";
import { useSelector } from "react-redux";

function Layout() {
  const value = useSelector((state: any) => state.compareSlice.value);

  return (
    <div>
      <Nav />
      <Outlet />
      {value && <CompareModal />}
      <Footer />
    </div>
  );
}

export default Layout;
