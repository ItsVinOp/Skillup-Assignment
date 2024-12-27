import { corousalData } from "../../../constants/index";
import { CarouselDemo } from "../CorousalDemo";

const Archiever = () => {
  return (
    <div className="mt-20 w-full p-5">
      <h1 className="text-2xl lg:text-4xl font-bold text-center">
        Hear from Our <i className="text-green-primary">Archievers</i>
      </h1>
      <div className="w-full lg:p-3 lg:w-[70%] mx-auto mt-10 ">
        <CarouselDemo data={corousalData} />
      </div>
    </div>
  );
};

export default Archiever;
