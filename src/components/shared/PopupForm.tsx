import { useDispatch, useSelector } from "react-redux";
import SkillUpForm from "../custom/SkillUpForm";
import { RootState } from "@/store/store";
import { hidePopup } from "@/feature/popupSlice";

const PopupForm = () => {
  const isPopupVisible = useSelector(
    (state: RootState) => state.popup.isPopupVisible
  );
  if (!isPopupVisible) return null;

  const dispatch = useDispatch();
  const handleClosePopup = () => {
    // @ts-ignore
    dispatch(hidePopup());
  };

  return (
    <div>
      <div className="w-full h-screen fixed left-0 top-0 z-[1000] flex items-center justify-center bg-black/50">
        <div className="absolute w-full h-full bg-black/30 -z-30"></div>
        <div className="relative">
          <span
            className="absolute right-5 top-5 cursor-pointer z-50"
            onClick={handleClosePopup}>
            <img src="/icons/cross.svg" alt="crossIcons" className="invert" />
          </span>
          <SkillUpForm key={1} />
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
