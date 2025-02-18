import "../css/Compare.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeCompareModal } from "../store/slices/compareSlice";

function CompareModal() {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.compareSlice.value);

  return (
    value && (
      <div className={"compare_modal flex flex-row gap-10 justify-between"}>
        <div className="flex-2 flex flex-row gap-15 justify-center">
          <div className="compare_img__section">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
              alt="compared-product"
              className="compare_img"
            />
            <label className="t4 font-medium font-sans">
              Men Printed Round Neck
            </label>
            <AiOutlineMinusCircle size={30} className="remove_product" />
          </div>
          <div className="compare_img__section">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
              alt="compared-product"
              className="compare_img"
            />
            <label className="t4 font-medium font-sans">
              Men Printed Round Neck
            </label>
            <AiOutlineMinusCircle size={30} className="remove_product" />
          </div>
          <div className="compare_img__section">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/a/n/l-gb-stop-thinking-start-doing-oversized-t-shirt-black-original-imagngnthrhckhaf.jpeg?q=70&crop=false"
              alt="compared-product"
              className="compare_img"
            />
            <label className="t4 font-medium font-sans">
              Men Printed Round Neck
            </label>
            <AiOutlineMinusCircle size={30} className="remove_product" />
          </div>
          <div className="compare_img__section">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/13/UKeQ7XUs_ffe7d5646fba42078172e1ea06f59002.jpg"
              alt="compared-product"
              className="compare_img"
            />
            <label className="t4 font-medium font-sans">Women Sweetheart</label>
            <AiOutlineMinusCircle size={30} className="remove_product" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-row gap-10 justify-between">
            <button>Compare Now</button>
            <AiOutlineCloseCircle
              size={35}
              className="cursor-pointer"
              onClick={() => dispatch(closeCompareModal())}
            />
          </div>
          <h2 className="text-gray-500 font-light text-justify">
            Beige regular top,Solid, Sweetheart neck, long, Regular sleeves,
            Knitted cotton, The model (height 5'8) is wearing a size S Beige
            regular top,Solid, Sweetheart neck, long, Regular sleeves, Knitted
            cotton, The model (height 5'8) is wearing a size S.
          </h2>
        </div>
      </div>
    )
  );
}

export default CompareModal;
