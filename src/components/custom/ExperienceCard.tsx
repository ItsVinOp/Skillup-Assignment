import NumberTicker from "../magicui/number-ticker";

interface IProp {
  tag?: string;
  number?: number;
  sign?: string;
  para: string;
  img: string;
  id: number;
  title?: string;
}
const ExperienceCard = ({ img, number, para, sign, tag, id, title }: IProp) => {
  return (
    <div
      className={`min-w-[306px] border-none pl-4 pr-4 h-[250px] lg:w-[327px] lg:h-[450px] min-h-[450px] rounded-lg border flex flex-col justify-start items-start ${
        id === 2
          ? "bg-green-light text-green-primary"
          : "bg-green-primary text-white"
      } overflow-hidden`}>
      <div className="w-full h-full scale-up transition-all flex flex-col justify-between lg:justify-between ">
        <div>
          <h3 className="font-base mt-2 lg:mt-4 ">{tag}</h3>
          <h1 className="my-2 lg:my-4 text-2xl lg:text-5xl font-bold">
            {number && (
              <NumberTicker
                value={number}
                className={`${
                  id === 2
                    ? "bg-green-light text-green-primary"
                    : "bg-green-primary text-white"
                }`}
              />
            )}
            {sign}
          </h1>
          <p className="hidden md:line-clamp-4">{para}</p>
          <p className="flex md:hidden text-2xl pr-7 font-semibold">{title}</p>
        </div>
        <img src={img} alt="image" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default ExperienceCard;
