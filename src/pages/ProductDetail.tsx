import "../css/Product.css";

function ProductDetail() {
  return (
    <div className="global_container top_container flex flex-row gap-10">
      <section className="flex-1 images">
        <img
          src="https://m.media-amazon.com/images/I/71V8nzp-04L._SX679_.jpg"
          alt="product image"
          className="images_section"
        />
      </section>
      <section className="flex-2 product_detail__section">
        <div
          className="flex flex-col gap-5"
          style={{ marginTop: 10, marginBottom: 15 }}
        >
          <div className="flex flex-row justify-between">
            <span className="t3 capitalize text-gray-400">Amazon</span>
            <button className="capitalize">add to wishlist</button>
          </div>
          <div>
            <span className="t2 uppercase text-gray-500">
              Rock Paper Scissors
            </span>
          </div>
          <div>
            <span className="t2 capitalize">
              Rock Paper Scissors Womens Tank Top High Neck Cotton Top Stylish
              Women Top
            </span>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <span className="t2">₹379</span>

            <span className="t2 text-gray-400 line-through">₹1399</span>

            <span className="t3 text-green-500">60% off</span>
          </div>
          <div className="btn_container">
            <span className="splash_btn compare_now">Compare Now</span>
            <span className="splash_btn buy_now">Buy Now</span>
          </div>
        </div>
        <div className="multi_images"></div>
      </section>
    </div>
  );
}

export default ProductDetail;
