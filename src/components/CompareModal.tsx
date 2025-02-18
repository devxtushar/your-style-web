import "../css/Compare.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeCompareModal } from "../store/slices/compareSlice";
import { useEffect } from "react";
import { fetchCompareData } from "../store/slices/apiSlice";
import { Link } from "react-router-dom";

function CompareModal() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.apiSlice.value);

  useEffect(() => {
    if (state.length === 0) {
      dispatch(fetchCompareData());
    }
  }, [state.length]);

  return (
    <div className={"compare_modal flex flex-row gap-10 justify-between"}>
      {state && state.length > 0 ? (
        <div className="flex-2 flex flex-row gap-15 justify-center">
          {state.map((items: any, i: number) => {
            const { imageGallery, platformName, title } = items;
            return (
              <div className="compare_img__section" key={i}>
                <img
                  src={imageGallery && imageGallery[0].url}
                  alt="compared-product"
                  className="compare_img"
                />
                <h4 className="font-semibold font-sans text-gray-400 capitalize">
                  {platformName}
                </h4>
                <label className="t4 font-medium font-sans text-justify">
                  {title}
                </label>
                <AiOutlineMinusCircle size={30} className="remove_product" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex-2 flex flex-row gap-15 justify-center">
          <h1>Nothing to compare !!!</h1>
        </div>
      )}
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex flex-row gap-10 justify-between">
          <Link to="/compare">
            <button onClick={() => dispatch(closeCompareModal())}>
              Compare Now
            </button>
          </Link>
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
  );
}

export default CompareModal;
