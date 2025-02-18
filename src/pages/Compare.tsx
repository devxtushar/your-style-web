import { useEffect } from "react";
import "../css/Compare.css";
import { fetchCompareData } from "../store/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
function Compare() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.apiSlice.value);
  useEffect(() => {
    if (state.length === 0) {
      console.log(state, "called  fetchCompareData ");
      dispatch(fetchCompareData());
    }
  }, []);
  return (
    <main className="top_container">
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
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-row justify-center items-center">
              <div className="compare_img__section">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
                  alt="compared-product"
                  className="compare_img"
                />
                <button className="remove_product">Remove</button>
              </div>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-row justify-center items-center">
              <div className="compare_img__section">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
                  alt="compared-product"
                  className="compare_img"
                />
                <button className="remove_product">Remove</button>
              </div>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-row justify-center items-center">
              <div className="compare_img__section">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
                  alt="compared-product"
                  className="compare_img"
                />
                <button className="remove_product">Remove</button>
              </div>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-row justify-center items-center">
              <div className="compare_img__section">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
                  alt="compared-product"
                  className="compare_img"
                />
                <button className="remove_product">Remove</button>
              </div>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
            <div className="compare_key__pair">
              <h2 className="font-serif">Price</h2>
              <h2 className="font-mono">$229</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Compare;
