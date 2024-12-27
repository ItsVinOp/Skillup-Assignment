import ShinyButton from "@/components/magicui/shiny-button";
import Button from "../Button";

const Mission = () => {
  return (
    <div className="mt-8 lg:mt-16 w-full lg:w-full  h-full lg:h-auto">
      <div className="w-full flex items-center flex-col-reverse lg:flex-row justify-between gap-4">
        <div className="w-full lg:w-1/2 p-5">
          <h1 className="text-2xl lg:text-5xl font-semibold">
            Our <i className="text-green-primary">Mission</i>
          </h1>
          <p className="my-5 font-medium text-black-100">
            <b> Hubnex Skillup </b> began with a simple, yet powerful vision: to
            revolutionize the way professionals advance their careers. From our
            humble beginnings, we have rapidly expanded into a global platform
            trusted by thousands of learners across the world. Our growth is
            fueled by an unwavering commitment to personalized mentorship and
            industry-relevant education. What sets us apart is our ability to
            adapt and scale—expanding our workshop offerings across a wide array
            of industries, from cutting-edge technology to dynamic business
            leadership. Today, our platform serves a diverse and global
            community, united by a common goal: the pursuit of excellence.
          </p>
          <div className="flex items-center justify-between lg:justify-start gap-1 lg:gap-2 my-4 lg:my-4">
            <Button
              text="Enroll Now"
              classname="py-3 px-8 lg:py-3 "
            />
            <ShinyButton className="border rounded-md py-3">
              <span className="text-xs lg:text-base text-nowrap text-black font-semibold py-1">
                Get Free Career Evaluation
              </span>
            </ShinyButton>
          </div>
        </div>
        <img src="/company/missionOne.svg" alt="missionOne" className="" />
      </div>
      <div className="w-full flex items-center flex-col lg:flex-row justify-between gap-4">
        <img src="/company/missionTwo.svg" alt="missionOne" className="" />
        <div className="w-full lg:w-1/2 p-5">
          <h1 className="text-2xl lg:text-5xl font-semibold">
            Our <i className="text-green-primary">Vision</i>
          </h1>
          <p className="my-5 font-medium text-black-100">
            At <b> Hubnex Skillup</b>, we are driven by a singular vision: to be
            the premier platform for career advancement, skill enhancement, and
            professional transformation. We envision a world where learning is
            not just about acquiring knowledge, but about applying it
            effectively in real-world scenarios. Our approach to education is
            practical, hands-on, and deeply personalized. We believe that by
            offering tailored mentorship and fostering a dynamic learning
            environment, we can empower professionals to confidently navigate
            the complexities of today’s job market and become leaders in their
            fields. Our goal is to be at the forefront of this transformation,
            shaping the future workforce with the tools and insights they need
            to succeed.
          </p>
          <div className="flex items-center justify-between lg:justify-start gap-1 lg:gap-2 my-4 lg:my-4">
            <Button
              text="Enroll Now"
              classname="py-3 px-8 lg:py-3 "
            />
            <ShinyButton className="border rounded-md py-3">
              <span className="text-xs lg:text-base text-nowrap text-black font-semibold py-1">
                Get Free Career Evaluation
              </span>
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
