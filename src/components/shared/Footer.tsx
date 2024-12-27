import { Link } from "react-router-dom";
import { badges, footerLinks, socialMediaImages } from "../../constants";
import Button from "../custom/Button";
import Batch from "../custom/Batch";
import SkillUpForm from "../custom/SkillUpForm";
import Learner from "./Learner";
import { handleLinkClick } from "@/lib/utils";
import { useState } from "react";

const Footer = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="w-full">
      <div className="w-full h-full  my-12 lg:my-32 p-5">
        <div className="w-full md:w-[85%] mx-auto h-full flex flex-col lg:flex-row  items-center lg:items-start justify-between gap-10">
          <div className="w-full lg:w-[60%]">
            <Batch classname="bg-red-primary m-4 p-2 mx-auto lg:mx-0 px-4 rounded-full flex items-center justify-around gap-2 w-max">
              <span className="w-[9px] h-[9px] border-2 border-white  rounded-full"></span>
              <p className="text-white">Limited Batch Size</p>
            </Batch>
            <h1 className="text-2xl lg:text-5xl font-semibold">
              Not everyone gets{" "}
              <i className="text-green-secondary">hands-on-experience</i> by us,
              check if you&apos;re the one!
            </h1>
            <p className="text-black-100 w-full lg:w-full my-7 text-[15px] lg:text-[20px]">
              Earn industry-recognized certificates with each workshop you
              complete, showcasing your expertise and commitment to professional
              excellence.
            </p>
            <Learner />
            <div className="w-full flex items-center flex-wrap gap-2 my-8">
              {badges.map((badge) => (
                <div key={badge.label} className="flex gap-2">
                  <img src={badge.icon} alt={badge.icon} />{" "}
                  <p className="text-green-three font-semibold text-xs ">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
            <Button text="Enroll Now!" classname="mx-auto md:mx-0" />
          </div>
          <SkillUpForm />
        </div>
      </div>
      <div className="w-full min-h-96 lg:h-72 bg-green-light p-2 lg:p-5 flex flex-col items-center justify-center">
        <div className="w-full lg:w-[80%] flex-col md:flex-row flex border-b-2 gap-6 border-black-100/40 p-4 justify-between ">
          <div className=" flex flex-col items-start justify-start w-full lg:w-1/3">
            <p className="mb-5 text-black-100">
              Earn industry-recognized certificates with each workshop you
              complete, showcasing your expertise and commitment to professional
              excellence.
            </p>
            <div className="flex items-center justify-start lg:justify-center gap-4 my-5">
              {socialMediaImages.map((app) => (
                <Link
                  to={""}
                  key={app.label}
                  className="cursor-pointer w-8 h-8 rounded-full bg-white hover:bg-green-primary flex items-center justify-center"
                  onMouseEnter={() => setHovered(app.label)}
                  onMouseLeave={() => setHovered(null)}>
                  <img
                    src={hovered === app.label ? app.imagetwo : app.image}
                    alt={app.label}
                    className="h-4 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-end justify-between">
            <div className="hidden lg:flex">
              <Button text="Enroll Now" />
            </div>
            <div className="w-full flex items-start lg:items-center flex-col lg:flex-row justify-between text-left">
              {footerLinks.map((link) => (
                <Link
                  to={link.link}
                  key={link.label}
                  onClick={handleLinkClick}
                  className="font-semibold text-base text-center mb-3 text-black-100 hover:text-black transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center my-10 text-sm lg:text-base">
          © Copyright 2024, All Rights Reserved by Hubnex Labs{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
