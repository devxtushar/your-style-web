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
      <section className=" flex-2 product_detail__section"></section>
    </div>
  );
}

export default ProductDetail;
