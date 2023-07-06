import React, { useState, useEffect } from "react";
import MenuModal from "./MenuModal";
import ContactUsButton from "./ContactUsButton";
import { AiOutlineMenu } from "react-icons/ai";

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
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  const menuClick = () => {
    setMenuIsOpen(!menuIsOpen);
    console.log(menuIsOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 200;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <div className="fixed w-screen h-fit px-[22px] md:px-[48px] flex flex-col items-center justify-between z-10">
      <nav
        className={`fixed w-screen h-[74px] px-[22px] md:px-[48px] flex items-center justify-between z-10 ${
          scroll
            ? "bg-black "
            : ` ${menuIsOpen ? "bg-black" : "bg-transparent"}`
        } ease-linear duration-400 transition-colors`}
      >
        <img
          src="/argos_logo.svg"
          alt=""
          className="w-[90px] md:w-[110px] pt-2"
        />
        <AiOutlineMenu
          onClick={menuClick}
          color="white"
          size={23}
          className="md:hidden"
        />

        <div className="hidden md:flex md:gap-[40px] lg:gap-[66px]">
          {navCenterOptions.map((links) => (
            <button className="text-sm text-white ">{links}</button>
          ))}
        </div>
        <div className="hidden md:flex md:gap-[45px] lg:gap-[66px]">
          {navRightOptions.map((links) => (
            <ContactUsButton links={links} />
          ))}
        </div>
      </nav>
      <MenuModal
        isOpen={menuIsOpen}
        navCenterOptions={navCenterOptions}
        navRightOptions={navRightOptions}
        scroll={scroll}
      />
    </div>
  );
};

export default Navbar;
