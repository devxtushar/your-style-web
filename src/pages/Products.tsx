import "../css/Product.css";
import { filterJSON, productJSON } from "../utils/JSON";
import ProductCard from "../components/ProductCard";
function Products() {
  return (
    <div className="global_container top_container flex flex-row gap-10">
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
                        {" "}
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
      <section className="products">
        <div className="flex flex-row flex-wrap gap-5 justify-evenly">
          {productJSON.map((items, i) => {
            return <ProductCard items={items} key={i} />;
          })}
          {productJSON.map((items, i) => {
            return <ProductCard items={items} key={i} />;
          })}
          {productJSON.map((items, i) => {
            return <ProductCard items={items} key={i} />;
          })}
          {productJSON.map((items, i) => {
            return <ProductCard items={items} key={i} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Products;
