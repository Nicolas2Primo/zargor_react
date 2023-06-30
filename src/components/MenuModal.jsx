import React from "react";
import ContactUsButton from "./ContactUsButton";

const MenuModal = ({ isOpen, navCenterOptions, navRightOptions, scroll }) => {
  return (
    <div
      className={`w-screen  ${
        isOpen == true
          ? " h-fit mt-[73.5px]  "
          : " flex flex-col opacity-0 mt-[-20vw]"
      }  ease-in duration-200 transition-all flex flex-col items-center justify-center  gap-4 py-10 z-0 ${
        scroll ? "bg-black " : ` ${isOpen ? "bg-black" : "bg-transparent"}`
      }`}
    >
      {navCenterOptions.map((option) => (
        <span
          className={`${
            isOpen == true ? "opacity-100 " : " opacity-0"
          } ease-in transition-opacity duration-[190ms] text-white`}
        >
          {option}
        </span>
      ))}
      <div className="flex gap-12">
        {navRightOptions.map((option) => (
          <ContactUsButton links={option} />
        ))}
      </div>
    </div>
  );
};

export default MenuModal;
