import { useDispatch } from "react-redux";
import { showPopup } from "@/feature/popupSlice";
import { skillSetAboutUsData } from "@/constants";
import { CircleCheck } from "lucide-react";

const Feature = () => {
  const dispatch = useDispatch();

  const handleFormShow = function () {
    dispatch(showPopup());
  };
  return (
    <div className="w-full h-full lg:h-screen  flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2 pl-4 lg:h-screen flex items-start lg:justify-between flex-col overflow-hidden">
        <h1 className="text-2xl text-center my-2 lg:text-left mx-auto lg:mx-0 lg:text-5xl text-wrap w-[80%] font-semibold">
          We Offer a <i className="text-green-secondary">Comprehensive</i> Skill
          Set
        </h1>
        <p className=" w-[90%] mx-auto lg:w-[70%] lg:mx-0 text-center lg:text-left font-medium text-lg mt-5">
          Supercharge your career with our expert-led programs, meticulously
          designed to equip you with the most sought-after skills for today’s
          competitive job market.
        </p>
        <button
          className="border-l-4 border-green-primary px-3 py-2 mt-6 mb-10 mx-auto lg:mx-0   flex items-center justify-center gap-2"
          onClick={handleFormShow}>
          Enroll Now{" "}
          <span className="bg-green-primary flex items-center justify-center w-6 h-6 rounded-full">
            <img src="/icons/arrright.svg" alt="arrow" />
          </span>
        </button>
        <img
          src="/icons/bgstrings.svg"
          alt="StringBg"
          className="w-[90%] pr-4 hidden lg:block"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full overflow-scroll no-scrollbar flex items-center justify-center bg-green-primary/20 rounded-sm flex-col">
        <h1 className="text-2xl font-semibold text-center my-3 lg:my-0 px-8 lg:px-0">
          Why Hubnex Skillup? Your Pathway to Success
        </h1>
        <h2 className="mx-auto text-center px-8 my-2 text-lg">
          Choosing Hubnex Skillup is choosing a future filled with
          opportunities. Here’s why we stand out:
        </h2>
        {skillSetAboutUsData.map((skill) => (
          <div className="w-[95%] p-4 flex gap-2" key={skill.label}>
            <CircleCheck height={32} width={32} />
            <div>
              <h1 className="text-xl font-semibold">{skill.label}</h1>
              <p className="text-sm">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
