import PricingCard from "../PricingCard";

import { pricingData } from "../../../constants/index";

const Pricing = () => {
  return (
    <div className="w-full h-auto mt-16 lg:mt-32" id="#pricing">
      <h1 className="text-2xl lg:text-5xl font-bold text-center my-4 lg:w-[35%] mx-auto">
        Choose The <i className="text-green-primary">Perfect Plan</i> For You
      </h1>
      <p className="text-center text-lg">
        Affordable, Flexible, and Packed with Value
      </p>
      <div className="w-[90%] lg:w-full h-[80%] mt-6 flex flex-col lg:flex-row items-center justify-around p-6 mx-auto gap-7">
        {pricingData.map((data) => (
          <PricingCard
            id={data.id}
            about={data.about}
            feature={data.feature}
            link={data.link}
            name={data.name}
            plan={data.plan}
            key={data.id}
            tag={data.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
