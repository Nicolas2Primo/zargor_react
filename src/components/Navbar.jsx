import React, { useState } from "react";

const Navbar = () => {
  const [navCenterOptions, setNavCenterOptions] = useState([
    "Services",
    "Projects",
    "Products",
  ]);
  const [navRightOptions, setNavRightOptions] = useState([
    "About",
    "Contact us",
  ]);

  return (
    <nav className="fixed w-screen h-[74px] px-[48px] flex items-center justify-between z-10">
      <img src="/argos_logo.svg" alt="" className="w-[110px] pt-2" />
      <div className="flex gap-[66px]">
        {navCenterOptions.map((links) => (
          <button className="text-sm text-white ">{links}</button>
        ))}
      </div>
      <div className="flex gap-[66px]">
        {navRightOptions.map((links) => (
          <button
            className={`text-sm ${
              links == "Contact us"
                ? " px-4 py-[6px] bg-[#FBBF24] rounded-sm font-bold"
                : "text-white"
            }`}
          >
            {links}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
