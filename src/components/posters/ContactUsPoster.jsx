import React, { useState } from "react";
import Input from "../Input";
import "./ContactUsPoster.css";

const ContactUsPosterSteps = ({ steps }) => {
  const [inputContent, setInputContent] = useState([
    {
      type: "text",
      label: "Name",
      content: "",
    },
    {
      type: "text",
      label: "Company",
      content: "",
    },
    {
      type: "email",
      label: "Email",
      content: "",
    },
  ]);
  const [servicesButtons, setServicesButtons] = useState([
    "Services",
    "Products",
    "Projects",
    "Others",
  ]);
  return (
    <>
      {steps == 1 ? (
        <>
          <span className="font-medium text-[18px] tracking-[0.15rem]">
            Hi, give us some information about your company
          </span>
          <div className="flex gap-[70px]">
            {inputContent.map((input) => (
              <Input type={input.type} label={input.label} />
            ))}
          </div>
        </>
      ) : steps == 2 ? (
        <>
          <span className="font-medium text-[18px] tracking-[0.15rem]">
            Now, tell us what kind of service you are looking for
          </span>
          <div className="flex gap-[70px]">
            {servicesButtons.map((service) => (
              <button className="w-[85px] h-[85px] text-center bg-white rounded-full bg-opacity-20 text-[13px] font-semibold focus:bg-opacity-25">
                {service}
              </button>
            ))}
          </div>
        </>
      ) : steps == 3 ? (
        <>
          <span className="font-medium text-[18px] tracking-[0.15rem]">
            And finally, tell us what specifically you're looking for
          </span>
          <div className="flex gap-[70px]">
            <Input label={"Content"} type={"text"} steps={steps} />
          </div>
        </>
      ) : (
        "error"
      )}
    </>
  );
};

const ContactUsPoster = () => {
  const [steps, setSteps] = useState(1);
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="h-[400px] w-[900px] bg-white contact_poster_background rounded-[11.3391px] ">
        <div className="flex justify-end w-full pt-8 pr-8 h-7">
          <span className="text-xs font-medium tracking-[0.15rem] text-white text-opacity-[0.7]">
            0{steps}/03
          </span>
        </div>
        <div className="h-full w-full flex flex-col gap-[35px] items-center justify-center text-opacity-[0.70] text-white">
          <ContactUsPosterSteps steps={steps} />

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => {
                if (steps > 1) {
                  setSteps(steps - 1);
                }
              }}
              className={`bg-white bg-opacity-[0.20] px-[16px] py-[4px] rounded-[6px] text-[13px] font-semibold ${
                steps > 1 ? "block" : "hidden"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (steps < 3) {
                  setSteps(steps + 1);
                } else if (steps == 3) {
                }
              }}
              className="bg-white bg-opacity-[0.20] px-[16px] py-[4px] rounded-[6px] text-[13px] font-semibold"
            >
              {steps < 3 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPoster;
