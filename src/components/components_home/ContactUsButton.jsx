import React from "react";

const ContactUsButton = ({ links }) => {
  return (
    <button
      className={`text-sm ${
        links == "Contact us"
          ? " px-4 py-[6px] bg-[#FBBF24] rounded-sm font-bold"
          : "text-white"
      }`}
    >
      {links}
    </button>
  );
};

export default ContactUsButton;
