import ExperienceCard from "./ExperienceCard";

import { experienceCard } from "../../constants/index";

const Experience = () => {
  return (
    <div className="mt-10 lg:mt-28 w-full h-auto  p-2 ">
      <div className="w-full lg:w-[85%] mx-auto">
        <h1 className="text-[20px] lg:text-4xl font-bold text-center my-3">
          Experience The <i className="text-green-primary">Statistical</i> Power
          Of Skillup
        </h1>
        <p className="w-full text-[14px] lg:w-[89%] text-center text-black-100 mx-auto text-xl my-8">
          Our workshops are designed to deliver tangible results, helping you
          boost your career prospects and achieve your goals. Here's what our
          graduates are saying:
        </p>
      </div>
      <div className="w-full lg:w-[85%] mx-auto h-auto flex items-center justify-between lg:justify-center overflow-scroll gap-12 no-scrollbar ">
        {experienceCard.map((card) => (
          <ExperienceCard
            title={card.title}
            img={card.img}
            number={card.number}
            para={card.para}
            sign={card.sign}
            tag={card.tag}
            key={card.tag}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
