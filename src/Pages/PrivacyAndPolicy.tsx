import PrivacyPolicyComp from "@/components/custom/PrivacyPolicyComp";
import { BreadcrumbWithCustomSeparator } from "@/components/shared/BreadScrum";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
    active: true,
  },
];
const PrivacyAndPolicy = () => {
  return (
    <div className="w-full ">
      <div className="w-[90%] mx-auto p-3 my-5">
        <BreadcrumbWithCustomSeparator links={links} />
      </div>
      <PrivacyPolicyComp />
    </div>
  );
};

export default PrivacyAndPolicy;
