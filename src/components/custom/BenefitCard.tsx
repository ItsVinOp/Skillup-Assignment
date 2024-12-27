interface IProp {
  label: string;
  title: string;
  description: string;
}
const BenefitCard = ({ description, label, title }: IProp) => {
  return (
    <div className="w-[96%] mx-auto border-2 border-black-100/30 rounded-md p-3 my-4 flex flex-col items-start justify-start h-max mb-5">
      <h3 className="text-base  lg:text-lg font-semibold ">{label}</h3>
      <h1 className="text-xl lg:text-[28px] font-bold">{title}</h1>
      <p className="my-5 text-black-100 text-[14px]">{description}</p>
    </div>
  );
};

export default BenefitCard;
