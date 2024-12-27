import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface IProp {
  highlight: string;
  review: string;
  name: string;
  role: string;
  company: string;
  location: string;
  from: string;
  img: string;
  star: number;
  joining: string;
  skill: string;
}
export function CarouselDemo({ data }: { data: IProp[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="w-full mx-auto">
        {data.map((data, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-full items-center flex-col lg:flex-row justify-around  lg:p-10">
                  <div className=" w-full lg:w-[27%] border border-green-quaternary/40 h-full rounded-2xl bg-white">
                    <div className=" w-full p-5 flex justify-center gap-4 items-center">
                      <img src={data.img} alt="Google" className="h-[60px]" />
                      <div>
                        <h2 className="text-2xl font-semibold">
                          {data.company}
                        </h2>
                        <p className="text-black-100">{data.location}</p>
                      </div>
                    </div>
                    <p className="text-center mt-4 w-[70%] mx-auto">
                      {data.from}
                    </p>
                    <div className="flex flex-col items-center justify-around gap-2 my-5">
                      <span className="bg-green-light px-2 py-1.5 rounded-md text-green-primary">
                        {data.role}
                      </span>
                      <span className="bg-green-light px-2 py-1.5 rounded-md text-green-primary">
                        {data.skill}
                      </span>
                    </div>
                  </div>
                  <div className=" lg:w-[70%] h-full rounded-2xl flex flex-col-reverse lg:flex-col items-center justify-start">
                    <div className="w-full px-2 order-4 lg:order-none flex">
                      <h1 className="text-base text-center  lg:text-4xl font-semibold lg:text-left relative p-1 lg:p-4">
                        <sup className="absolute lg:left-0 lg:top-3 top-2 left-4 text-green-primary">
                          "
                        </sup>
                        {data.highlight}
                        <sup className="text-green-primary">"</sup>
                      </h1>
                    </div>
                    <p className="w-[90%] text-center lg:text-left text-sm lg:text-base text-black-100 lg:border-b-2 border-black-100/30 pb-5">
                      {data.review}
                    </p>
                    <div className="lg:w-[90%] order-6 lg:order-none mx-auto flex items-center flex-col py-4 lg:mt-0 lg:flex-row justify-between h-full text-center lg:text-left">
                      <div>
                        <h3 className="text-2xl  font-semibold text-green-quaternary">
                          {data.name}
                        </h3>
                        <p className="text-base font-medium ">{data.role}</p>
                        <p className="text-black-100/70">
                          <b className="text-black">{data.company}</b>,{" "}
                          {data.location}
                        </p>
                      </div>
                      <div className=" p-2 my-2 ">
                        <p className="flex gap-1 items-center justify-center lg:justify-start">
                          {Array(data.star)
                            .fill(data.star)
                            .map((_, i) => (
                              <img
                                src="/icons/startwo.svg"
                                alt="startwo"
                                key={i}
                              />
                            ))}
                        </p>
                        <p className="my-1">{data.joining}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
