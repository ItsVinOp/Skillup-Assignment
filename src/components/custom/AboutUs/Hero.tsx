import Learner from "@/components/shared/Learner";
import Button from "../Button";
import ShinyButton from "@/components/magicui/shiny-button";

const Hero = () => {
  return (
    <div className="w-full h-full lg:p-4 flex flex-col items-center justify-start">
      <h1 className="text-left lg:text-center mx-auto w-[85%] text-4xl lg:text-6xl font-semibold  lg:mt-10 mb-5">
        <p>Unlock Your Potential</p>
        and Achieve Your Knowledge to Succeed in{" "}
        <i className="text-green-primary"> Your Career</i>
      </h1>
      <div className="mx-auto w-full lg:w-max my-5">
        <Learner />
      </div>
      <div className="flex items-center justify-between gap-2 my-4 lg:my-0">
        <Button
          text="Enroll Now"
          classname="py-3 px-8 lg:py-3 "
        />
        <ShinyButton className="border rounded-md py-3">
          <span className="text-xs md:text-base text-nowrap text-black font-semibold py-1">
            Get Free Career Evaluation
          </span>
        </ShinyButton>
      </div>
      <div className="flex items-start my-6 w-[75%] text-center">
        <img src="/icons/success.svg" alt="success" />
        <p className=" text-xs lg:font-medium">
          100% Money Back Guarantee if you're not satisfied with the Evaluation
        </p>
      </div>
    </div>
  );
};

export default Hero;
