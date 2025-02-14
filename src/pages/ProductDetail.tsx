import { useParams } from "react-router-dom";
import "../css/Product.css";
import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";
import Slider from "react-slick";

function ProductDetail() {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAPI(`/products?_id=${params.id}`),
  });
  console.log(params, "details params");
  console.log(data, "details data");
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
    description,
    mrp,
    salePrice,
    percentageOff,
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
        <div className="main_Width global_container top_container flex flex-row gap-10">
          <section className="flex-1  images_section">
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
              <span className="splash_btn compare_now">Compare Now</span>
              <span className="splash_btn buy_now">Buy Now</span>
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
                <button className="capitalize">add to wishlist</button>
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
                  <span className="t4 text-green-500">
                    {percentageOff}% off
                  </span>
                )}
              </div>
            </div>
            <div className="multi_images"></div>
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
