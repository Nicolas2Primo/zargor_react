import React, { useState } from "react";
import Input from "../Input";
import "./ContactUsPoster.css";

const ContactUsPoster = () => {
  const [inputContent, setInputContent] = useState([
    {
      type: "text",
      content: "Name",
    },
    {
      type: "text",
      content: "Company",
    },
    {
      type: "email",
      content: "Email",
    },
  ]);

  return (
    <div className="flex items-center justify-center w-full ">
      <div className="h-[400px] w-[900px] bg-white contact_poster_background rounded-[11.3391px] ">
        <div className="flex justify-end w-full pt-8 pr-8 h-7">
          <span className="text-xs font-medium tracking-[0.15rem] text-white text-opacity-[0.7]">
            01/03
          </span>
        </div>
        <div className="h-full flex flex-col gap-[40px] items-center justify-center text-opacity-[0.70] text-white">
          <span className="font-medium text-[18px] tracking-[0.15rem]">
            Hi, give us some information about your company
          </span>
          <div className="flex gap-[70px]">
            {inputContent.map((input) => (
              <Input type={input.type} content={input.content} />
            ))}
          </div>
          <button className="bg-white bg-opacity-[0.20] px-[16px] py-[4px] rounded-[6px] text-[13px] font-semibold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPoster;
