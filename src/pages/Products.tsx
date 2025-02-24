import "../css/Product.css";
import { filterJSON } from "../utils/JSON";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";

function Products() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery({
    queryKey: ["products", params.type],
    queryFn: () => getAPI(`/products?categoryType=${params.type}`),
    placeholderData: keepPreviousData,
  });

  console.log("remove");

  function handleFilters(
    e: React.ChangeEvent<HTMLInputElement>,
    queryKey: string
  ) {
    const { checked, value } = e.target;
    const currentValues = searchParams.getAll(queryKey);

    let updatedValues;
    if (checked) {
      updatedValues = [...currentValues, value];
    } else {
      updatedValues = currentValues.filter((item) => item !== value);
    }

    const newSearchParams = new URLSearchParams(searchParams); // Copy existing params
    newSearchParams.delete(queryKey); // Remove old values
    updatedValues.forEach((val) => newSearchParams.append(queryKey, val)); // Add updated values

    setSearchParams(newSearchParams);
  }

  if (!data) return null;
  return (
    <main>
      <div className="main_Width global_container top_container flex flex-row gap-10">
        <section className="filters flex flex-col gap-10">
          {filterJSON.map((items, i) => {
            const { heading, queryKey, options } = items;
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
                        <input
                          type="checkbox"
                          className="checkbox"
                          value={items.name}
                          checked={searchParams
                            .getAll(queryKey)
                            .includes(items.name)}
                          onChange={(e) => {
                            handleFilters(e, queryKey);
                          }}
                        />
                        <label className="capitalize">
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
                return <ProductCard items={items} key={i} />;
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
