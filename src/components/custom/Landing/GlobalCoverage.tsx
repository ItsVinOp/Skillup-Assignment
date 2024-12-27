import { badges } from "../../../constants/index";
import Learner from "../../shared/Learner";
import Button from "../../custom/Button";
import ShinyButton from "../../magicui/shiny-button";
const GlobalCoverage = () => {
  return (
    <div className="w-full h-full lg:h-screen py-5 lg:py-0 lg:mt-32 bg-green-four">
      <div className="w-full lg:w-[80%] relative mx-auto h-[90%]  flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="relative lg:absolute left-0 top-0 w-full lg:w-[60%] h-full lg:h-[70%]">
          <p className="font-medium text-black/80 my-2 text-center lg:text-left">
            Global Coverage
          </p>
          <h1 className="text-2xl text-center lg:text-left w-[80%] lg:w-full mx-auto lg:text-5xl font-semibold my-2">
            There’s a whole world out there. Why not get{" "}
            <i className="text-green-primary">hands-on-experience </i>from top?
          </h1>
          <p className="font-medium text-base text-black-100 my-5 text-center lg:text-left lg:my-3 mx-auto lg:mx-0 w-[85%]">
            We believe in the power of hands-on learning to truly understand the
            world around us. Why settle for theoretical knowledge when you can
            dive into real-world projects, gain practical skills, and learn from
            industry experts? Our programs are designed to give you the
            experience and exposure you need to stand out in a competitive
            world.
          </p>
          <Learner />
          <div className="w-full flex items-center flex-wrap  gap-2 my-8 justify-center lg:justify-start">
            {badges.map((badge) => (
              <div key={badge.label} className="flex gap-2">
                <img src={badge.icon} alt={badge.icon} />{" "}
                <p className="text-green-three font-semibold text-xs ">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 my-4 lg:my-0">
            <Button text="Enroll Now" classname="py-3 px-8 lg:py-3 " />
            <ShinyButton className="border rounded-md py-3">
              <span className="text-sm lg:text-base text-nowrap text-black font-semibold py-3">
                Get Free Career Evaluation
              </span>
            </ShinyButton>
          </div>
        </div>
        <div className="relative lg:absolute right-0 bottom-0 w-full lg:w-[60%] h-full lg:h-[70%] flex items-center justify-center">
          <img
            src="/icons/global-coverage.svg"
            alt="GlobalCoverage"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalCoverage;
