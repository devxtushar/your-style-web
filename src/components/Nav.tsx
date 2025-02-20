import { useSelector } from "react-redux";
import "../css/Navfooter.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();
  const state = useSelector((state: any) => state.apiSlice.value);
  return (
    <nav>
      <div
        className={
          location.pathname === "/"
            ? "flex flex-row gap-5 items-center global_container nav_transparent"
            : "flex flex-row gap-5 items-center global_container nav_visible"
        }
      >
        <div className="flex-1">
          <Link to="/">
            <img
              src="/images/brandLogo.png"
              alt="brandLogo"
              className="brand_logo"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-row justify-between gap-5 fix_maxWidth">
          <Link to="/product/women">
            <h3 className="uppercase">Women</h3>
          </Link>
          <Link to="/product/men">
            <h3 className="uppercase">Men</h3>
          </Link>
          <Link to="/product/genz">
            <h3 className="uppercase">Genz</h3>
          </Link>
          <Link to="/product/kids">
            <h3 className="uppercase">Kids </h3>
          </Link>
          <Link to="/product/fashion">
            <h3 className="uppercase">Fashion</h3>
          </Link>
        </div>
        <div className="flex-1 flex flex-row justify-end">
          {state && state.length === 1 ? (
            <button
              className="uppercase"
              style={{ backgroundColor: "gray" }}
              onClick={() => alert("Add at least 2 products ")}
            >
              Compare
              {state && state.length === 0 ? null : ` (${state.length})`}
            </button>
          ) : (
            <Link to="/compare">
              <button className="uppercase">
                Compare
                {state && state.length === 0 ? null : ` (${state.length})`}
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
