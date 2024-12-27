import { cn } from "../../lib/utils";
import { companyLogo } from "../../constants";
import Marquee from "../magicui/marquee";

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className={cn()}>
      <div className="flex flex-row items-center gap-2">
        <div className="w-60  flex items-center justify-start">
          <img className="w-28 h-16" alt="" src={img} height={120} />
        </div>
      </div>
    </figure>
  );
};

export function MarqueeTwo() {
  return (
    <div className="relative flex h-[160px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {companyLogo.map((companies) => (
          <ReviewCard key={companies.img} img={companies.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background -z-10"></div>
    </div>
  );
}
