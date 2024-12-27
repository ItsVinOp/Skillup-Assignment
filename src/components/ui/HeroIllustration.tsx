const HeroIllustration = () => {
  return (
    <div className="absolute w-full h-full lg:block hidden">
      <div className="flex flex-col items-start text-center w-52 lg:top-[20%] left-16 absolute">
        <div className="mb-4">
          <img
            src="/icons/illustration4.svg"
            alt="Step 1 Illustration"
            className="h-32"
          />
        </div>
        <div className="text-xs w-full text-left flex items-start relative">
          <p className="w-[70%] text-sm">
          Fill out the form and receive personalized guidance from our expert mentors to kickstart
your career journey.
          </p>
          <img
            src="/icons/illusArrowOne.svg"
            alt="arrowOne"
            className="absolute right-0 top-1/2"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center w-40 top-[30%] right-16 absolute">
        <div className="flex flex-col items-center text-center w-40 relative">
          <div className="mb-4">
            <img
              src="/icons/illustration3.svg"
              alt="Step 1 Illustration"
              className="w-32 mr-5"
            />
          </div>
          <div className="text-xs w-full text-left">
            <p className="text-sm">
            We’re committed to your success. Either land a job or get a full refund—your career is
            our priority!
            </p>
            <img
              src="/icons/illusArrowFive.svg"
              alt="arrowfive"
              className="absolute -left-1/2 -bottom-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
