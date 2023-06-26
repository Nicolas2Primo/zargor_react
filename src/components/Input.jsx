import React from "react";

const Input = ({ type, content }) => {
  return (
    <div className="flex flex-col gap-[1px]">
      <label
        htmlFor={type}
        className="text-[13px] pl-[2px] font-medium tracking-[0.15rem] "
      >
        {content}
      </label>
      <input
        type={type}
        className="rounded-[7px] w-[210px] h-[28px] bg-white bg-opacity-[0.20]"
      />
    </div>
  );
};

export default Input;
