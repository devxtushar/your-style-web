function ProductCard(props: any) {
  const { title, platformName, description, imageGallery } = props.items;
  return (
    <div className="product_card">
      <div>
        <img
          src={imageGallery[0].url}
          alt="women black top"
          className="product_img"
        />
      </div>
      <div
        className="flex flex-col gap-2"
        style={{ marginTop: 10, marginBottom: 15 }}
      >
        <div>
          <span className="t4 capitalize text-gray-400">{platformName}</span>
        </div>
        <div>
          <span className="t3 uppercase text-gray-500">{title}</span>
        </div>
        <div>
          <span className="t4 capitalize">
            {description && description.length > 38 ? (
              <>
                {description.slice(0, 38)}
                {"..."}
              </>
            ) : (
              description
            )}
          </span>
        </div>
        <div style={{ marginTop: 15 }}>
          <button className="wishlist_btn">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
