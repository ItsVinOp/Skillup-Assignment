import { useDispatch } from "react-redux";
import ShinyButton from "../magicui/shiny-button";
import { showPopup } from "@/feature/popupSlice";

const Banner = () => {
  const dispatch = useDispatch();

  const handleFormShow = function () {
    dispatch(showPopup());
  };
  return (
    <div className="w-full bg-green-primary h-28 mt-20 lg:mt-32 flex items-center justify-center">
      <div className="w-full lg:w-[80%] mx-auto flex items-center justify-center lg:justify-between">
        <div className="flex items-center gap-2 lg:gap-6">
          <img
            src="/images/money.png"
            alt="money"
            className="h-9 md:h-11 lg:h-1/3"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="text-[8px] md:text-lg  text-white/50">Not Satisfied?</p>
            <h1 className="text-[12px] lg:text-3xl font-semibold text-white">
              Get 100% Money Back Guarantee!
            </h1>
          </div>
        </div>
        <div>
          <ShinyButton onClick={handleFormShow}>
            <div className="flex items-center gap-3 bg-white py-2 px-4 rounded-sm text-xs lg:text-lg      text-green-quaternary">
              Enroll Now <img src="/icons/arrgreen.svg" alt="right arrow" />
            </div>
          </ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
