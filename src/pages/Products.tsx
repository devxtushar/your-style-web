import "../css/Product.css";
import { filterJSON } from "../utils/JSON";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";
function Products() {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ["products", params.type],
    queryFn: () => getAPI(`/products?categoryType=${params.type}`),
    placeholderData: keepPreviousData,
  });
  console.log(data, "data kya hai ");
  if (!data) return null;
  return (
    <main>
      <div className="main_Width global_container top_container flex flex-row gap-10">
        <section className="filters flex flex-col gap-10">
          {filterJSON.map((items, i) => {
            const { heading, options } = items;
            return (
              <div key={i} className="flex flex-col gap-5">
                <h2>{heading}</h2>
                <ul>
                  {options.map((items, i) => {
                    return (
                      <li
                        className="t3 flex flex-row justify-left items-center gap-5"
                        key={i}
                      >
                        <input type="checkbox" className="checkbox" />
                        <label>
                          {items.name} {heading === "Discounts" && "% or more"}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <section className="flex-1 products">
          <div className="flex flex-row flex-wrap gap-5 justify-evenly">
            {data.data.length > 0 ? (
              data.data.map((items: any, i: number) => {
                return (
                  <Link to={`/product-detail/${items._id}`} key={i}>
                    <ProductCard items={items} />
                  </Link>
                );
              })
            ) : (
              <div
                className="flex flex-row justify-center items-center"
                style={{ height: "70vh" }}
              >
                <h1>Products are not available in this category!</h1>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Products;
