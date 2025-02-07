import "../css/Navfooter.css";

function Nav() {
  return (
    <nav className="flex flex-row gap-5 items-center global_container">
      <div className="flex-1">
        <img
          src="/images/brandLogo.webp"
          alt="brandLogo"
          className="brand_logo"
        />
      </div>
      <div className="flex-1 flex flex-row justify-between gap-5 fix_maxWidth">
        <div>
          <h3 className="uppercase">Women</h3>
        </div>
        <div>
          <h3 className="uppercase">Men</h3>
        </div>
        <div>
          <h3 className="uppercase">Genz</h3>
        </div>
        <div>
          <h3 className="uppercase">Kids </h3>
        </div>
        <div>
          <h3 className="uppercase">Fashion</h3>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-end">
        <button>Wishlist</button>
      </div>
    </nav>
  );
}

export default Nav;
