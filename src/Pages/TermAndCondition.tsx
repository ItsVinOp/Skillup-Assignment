import TermConditionComp from "@/components/custom/TermConditionComp";
import { BreadcrumbWithCustomSeparator } from "@/components/shared/BreadScrum";

const termsLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "TERMS AND CONDITIONS",
    to: "/term-and-condition",
    active: true,
  },
];
const TermAndCondition = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto p-3 my-5">
        <BreadcrumbWithCustomSeparator links={termsLinks} />
      </div>
      <TermConditionComp />
    </div>
  );
};

export default TermAndCondition;
