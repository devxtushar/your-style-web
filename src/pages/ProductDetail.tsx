import { useParams } from "react-router-dom";
import "../css/Product.css";
import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCompareModal } from "../store/slices/compareSlice";
import { fetchCompareData } from "../store/slices/apiSlice";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAPI(`/products?_id=${params.id}`),
  });

  if (!data)
    return (
      <div
        className="flex flex-row justify-center items-center"
        style={{ height: "90vh" }}
      >
        <h1>Unable to get product detail...</h1>
      </div>
    );
  const {
    title,
    imageGallery,
    platformName,
    productBuyUrl,
    description,
    mrp,
    salePrice,
    percentageOff,
    productDetail,
    productDescription,
    rate,
    _id,
  } = data?.data[0];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      {data.data.length > 0 ? (
        <div className="main_Width global_container top_container flex flex-row flex-wrap gap-10">
          <section className="flex-1  images_section flex flex-col justify-between gap-10">
            <Slider {...settings}>
              {imageGallery.map(
                (items: { url: string; altText: string }, i: number) => {
                  const { url, altText } = items;
                  return (
                    <img key={i} src={url} alt={altText} className="images" />
                  );
                }
              )}
            </Slider>
            <div className="btn_container">
              <span
                className="splash_btn compare_now"
                onClick={() => {
                  dispatch(addToCompareModal(_id)),
                    dispatch(fetchCompareData());
                }}
              >
                Compare
              </span>
              <a
                href={productBuyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="splash_btn buy_now"
              >
                <span>Buy Now</span>
              </a>
            </div>
          </section>
          <section className="flex-2 product_detail__section">
            <div
              className="flex flex-col gap-5"
              style={{ marginTop: 10, marginBottom: 15 }}
            >
              <div className="flex flex-row justify-between">
                <span className="t3 capitalize text-gray-400">
                  {platformName}
                </span>
              </div>
              <div>
                <span className="t2 uppercase text-gray-500">{title}</span>
              </div>
              <div>
                <span className="t2 capitalize">{description}</span>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <span className="t2">₹{salePrice}</span>

                {mrp != salePrice && (
                  <span className="t3 text-gray-400 line-through">₹{mrp}</span>
                )}
                {percentageOff != 0 && (
                  <span className="t3 text-green-500">
                    {percentageOff}% off
                  </span>
                )}
              </div>
              <div className="flex flex-row gap-5 items-center">
                <span className="t2 flex flex-row gap-5 items-center custom_chip">
                  {rate.ratingCount} <AiFillStar size={20} />
                </span>

                <span className="t2 text-gray-500">
                  {rate.ratingNumber} rating and {rate.reviewNumber} reviews
                </span>
              </div>
            </div>
            {productDetail && productDetail.length > 0 && (
              <div className="product_detail_KEYPAIR flex flex-row flex-wrap gap-10">
                {productDetail.map(
                  (items: { name: string; value: string }, i: number) => {
                    const { name, value } = items;
                    return (
                      <div className="key_pair flex flex-col gap-2" key={i}>
                        <span className="t4 font-medium text-gray-400">
                          {name}
                        </span>
                        <h3>{value}</h3>
                      </div>
                    );
                  }
                )}
              </div>
            )}

            {productDescription && productDescription.length > 0 && (
              <div className="product_description top_container flex flex-col gap-10">
                <h1 className="font-serif">Product Description</h1>
                {productDescription &&
                  productDescription.length > 0 &&
                  productDescription.map(
                    (
                      items: {
                        heading: string;
                        description: string;
                        image: string;
                      },
                      i: number
                    ) => {
                      const { heading, description, image } = items;
                      return (
                        <div key={i} className="flex flex-row flex-wrap gap-10">
                          <div>
                            <h2 className="font-semibold">{heading}</h2>
                            <div>
                              <h3 className="font-light font-sans">
                                {description}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <img
                              src={image}
                              alt="product-image"
                              className="product_description__Image"
                            />
                          </div>
                        </div>
                      );
                    }
                  )}
                <hr />
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <h1>Unable to get product detail...</h1>
        </div>
      )}
    </main>
  );
}

export default ProductDetail;
