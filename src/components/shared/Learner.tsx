import { personImages } from "../../constants/index";
import NumberTicker from "../magicui/number-ticker";

const Learner = () => {
  return (
    <div className="flex gap-2 items-center flex-row lg:items-start justify-center lg:justify-start">
      <div className="relative w-[35%] lg:w-36 h-11 lg:h-auto">
        {personImages.map((person) => (
          <img
            src={person.src}
            className={person.className}
            key={person.alt}
            alt={person.alt}
          />
        ))}
      </div>
      <div className="flex w-[60%] flex-col items-start justify-center">
        <h1 className="font-semibold text-black-100">
          <NumberTicker value={4532} className="text-black-100" />+ Learners
        </h1>
        <p className="text-black-100 text-xs">
          took their first step to succeed in their career{" "}
        </p>
      </div>
    </div>
  );
};

export default Learner;
