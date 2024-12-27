import RefundPolicyComp from "@/components/custom/RefundPolicyComp";
import { BreadcrumbWithCustomSeparator } from "@/components/shared/BreadScrum";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Refund Policy",
    to: "/refund-policy",
    active: true,
  },
];
const RefundPolicy = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto p-3 my-5">
        <BreadcrumbWithCustomSeparator links={links} />
      </div>
      <RefundPolicyComp />
    </div>
  );
};

export default RefundPolicy;
