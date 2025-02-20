import "../css/Compare.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Compare() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.apiSlice.value);

  return (
    <main className="top_container">
      {state && state.length > 0 ? (
        <div className="main_Width global_container top_container compare_card">
          <div className="flex flex-row gap-5 justify-between items-center">
            <div>
              <h1 className="font-semibold font-sans">Compare Result</h1>
            </div>
            <div>
              <button>Back</button>
            </div>
          </div>
          <div className="top_container flex flex-row justify-between">
            {state.map((items: any, i: number) => {
              const {
                title,
                platformName,
                rate,
                imageGallery,
                mrp,
                salePrice,
                percentageOff,
              } = items;
              return (
                <div className="flex-1 flex flex-col gap-10" key={i}>
                  <div className="flex flex-row justify-center items-center">
                    <div className="compare_img__section">
                      <img
                        src={imageGallery && imageGallery[0].url}
                        alt="compared-product"
                        className="compare_img"
                      />
                      <AiOutlineMinusCircle
                        size={30}
                        className="remove_product"
                      />
                    </div>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">
                      Platform
                    </h2>
                    <h2 className="font-sans capitalize">{platformName}</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans  text-gray-500 capitalize">
                      Seller
                    </h2>
                    <h2 className="font-sans capitalize">{title}</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">
                      Price
                    </h2>
                    <h2 className="font-sans">₹{salePrice}</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">Mrp</h2>
                    <h2 className="font-sans">{mrp}</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">
                      Discount
                    </h2>
                    <h2 className="font-sans">{percentageOff}%</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">
                      Average Rating
                    </h2>
                    <h2 className="font-sans">{rate.ratingCount}</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">
                      Ratings
                    </h2>
                    <h2 className="font-sans">{rate.ratingNumber}</h2>
                  </div>
                  <div className="compare_key__pair">
                    <h2 className="font-sans text-gray-500 capitalize">
                      Reviews
                    </h2>
                    <h2 className="font-sans">{rate.reviewNumber}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="main_Width global_container top_container compare_card">
          <div className="flex flex-row gap-5 justify-between items-center">
            <div>
              <h1 className="font-semibold font-sans">Compare Result</h1>
            </div>
            <div>
              <button>Back</button>
            </div>
          </div>
          <div
            className="top_container flex flex-row justify-center"
            style={{ height: "50vh" }}
          >
            <h1>Nothing to compare! Add some products to compare.</h1>
          </div>
        </div>
      )}
    </main>
  );
}

export default Compare;
