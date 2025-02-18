import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCompareModal } from "../store/slices/compareSlice";
function ProductCard(props: any) {
  const dispatch = useDispatch();
  const {
    title,
    platformName,
    description,
    imageGallery,
    mrp,
    salePrice,
    percentageOff,
    productBuyUrl,
    _id,
  } = props.items;

  return (
    <div className="product_card">
      <Link to={`/product-detail/${_id}`}>
        <div>
          <img
            src={imageGallery[0].url}
            alt="women black top"
            className="product_img"
          />
        </div>
      </Link>
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
            {description && description.length > 30 ? (
              <>
                {description.slice(0, 30)}
                {"..."}
              </>
            ) : (
              description
            )}
          </span>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <span className="t3">₹{salePrice}</span>
          {mrp != salePrice && (
            <span className="t3 text-gray-400 line-through">₹{mrp}</span>
          )}
          {percentageOff != 0 && (
            <span className="t4 text-green-500">{percentageOff}% off</span>
          )}
        </div>
        <div className="btn_container" style={{ marginTop: 15 }}>
          <span
            className="splash_btn compare_now"
            onClick={() => dispatch(addToCompareModal(_id))}
          >
            Compare
          </span>
          <a
            href={productBuyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="splash_btn buy_now"
          >
            <span>Buy</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
