import ShinyButton from "../../magicui/shiny-button";
import { Learner } from "../../index";
import Batch from "../Batch";
import Button from "../Button";
import { certificationBadges } from "../../../constants/index";

const Certification = () => {
  return (
    <div className="w-[95%] mt-16  lg:mt-32 mx-auto flex items-start lg:items-center justify-center flex-col-reverse lg:flex-row">
      <div className="w-full  py-10 px-4">
        <Batch classname="bg-blue-primary my-4 p-2  px-4 rounded-full hidden lg:flex items-center justify-around gap-2 w-max">
          <img src="/social/linkedin.svg" alt="linkedin" className="" />
          <p className="text-white tracking-wide">Shareable in Linkedin</p>
        </Batch>
        <h1 className=" text-2xl lg:text-5xl font-bold text-center lg:text-left ">
          Get <i className="text-green-primary">Certified</i> With Every
          Completion
        </h1>
        <p className="text-xs lg:text-xl text-black-100 my-4">
          Earn industry-recognized certificates after completing each workshop,
          demonstrating your expertise, dedication, and readiness for the
          professional world. Each certification adds value to your resume and
          sets you apart in today’s competitive job market.
        </p>
        <Learner />
        <div className="w-full flex items-center flex-col lg:flex-row flex-wrap gap-2 my-4">
          {certificationBadges.map((badge) => (
            <div key={badge.label} className="flex gap-2">
              <img src={badge.icon} alt={badge.icon} />{" "}
              <p className="text-green-three font-semibold text-xs ">
                {badge.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center lg:justify-start  gap-2 my-4 lg:my-4">
          <Button  text="Enroll Now" classname="py-3 px-8 lg:py-3 " />
          <ShinyButton className="border border-black-100 rounded-md">
            <p className="text-sm lg:text-base text-nowrap text-black font-semibold py-1">
              Get Free Career Evaluation
            </p>
          </ShinyButton>
        </div>
      </div>
      <div className="w-full lg:w-[40%]">
        <img
          src="/icons/certification.svg"
          alt="certification"
          className="w-full"
        />
      </div>
      <Batch classname="bg-blue-primary m-4 p-2 mx-auto px-4 rounded-full lg:hidden flex items-center justify-around gap-2 w-max">
        <img src="/social/linkedin.svg" alt="linkedin" className="" />
        <p className="text-white tracking-wide">Shareable in Linkedin</p>
      </Batch>
    </div>
  );
};

export default Certification;
