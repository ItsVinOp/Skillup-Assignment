import { reviews } from "../../constants/index";
import { cn } from "../../lib/utils";
import Marquee from "../magicui/marquee";

const firstRow = reviews.slice(0, reviews.length / 2);

export const ReviewCard = ({ name }: { name: string }) => {
  return (
    <figure
      className={cn(
        "relative min-w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="flex flex-row items-center justify-start gap-4 h-full">
        <img src="/icons/star.svg" alt="star" />
        <div className="flex items-center justify-center gap-2">
          <p>{name}</p>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
