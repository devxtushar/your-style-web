import "../css/Navfooter.css";

function Nav() {
  return (
    <nav className="flex flex-row gap-5 items-center">
      <div className="flex-1">
        <img
          src="/images/brandLogo.webp"
          alt="brandLogo"
          className="brand_logo"
        />
      </div>
      <div className="flex-1 flex flex-row justify-between gap-5 fix_maxWidth">
        <h3 className="capitalize">Women</h3>
        <h3 className="capitalize">Men</h3>
        <h3 className="capitalize">Genz</h3>
        <h3>Kid</h3>
        <h3>Fashion</h3>
      </div>
      <div className="flex-1 flex flex-row justify-end">
        <h3>Wishlist</h3>
      </div>
    </nav>
  );
}

export default Nav;
