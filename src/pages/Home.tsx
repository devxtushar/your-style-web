import CategoryCard from "../components/CategoryCard";
import CustomHeader from "../components/CustomHeader";
import ProductCard from "../components/ProductCard";
import "../css/Home.css";
import { productJSON } from "../utils/JSON";

function Home() {
  return (
    <main>
      <div className="home global_container flex flex-col gap-10 items-left justify-center">
        <div>
          <h1 className="offer_text">
            Raining Offers From <br />
            All Platform!
          </h1>
          <h1 className="font-bold">Upto 70% Off On Products</h1>
        </div>
        <div className="flex flex-row gap-5">
          <button>Shop Now</button>
          <button>Find More</button>
        </div>
      </div>
      <div className="categories global_container top_container">
        <CustomHeader
          title="Categories"
          subtitle="Top featured categories of all products"
        />
        <div className="top_container category_div flex flex-row gap-10 justify-evenly">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>

        <div className="limited_edition"></div>
      </div>
      <div className="featured global_container top_container">
        <CustomHeader
          title="Featured Products"
          subtitle="Top Featured products with maximum discount"
        />
        <div className="flex flex-row flex-wrap gap-5 justify-evenly top_container">
          {productJSON.map((items, i) => {
            return (
              <div key={i}>
                <ProductCard items={items} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
