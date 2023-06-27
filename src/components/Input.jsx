import React from "react";

const Input = ({ type, label, steps }) => {
  return (
    <div className={`flex flex-col gap-[1px] `}>
      <label
        htmlFor={type}
        className="text-[13px] pl-[2px] font-medium tracking-[0.15rem] "
      >
        {label}
      </label>
      {steps == 3 ? (
        <textarea
          name="content"
          id=""
          cols="70"
          rows="6"
          className="bg-white bg-opacity-[0.20] focus:bg-opacity-25 outline-0 px-2 text-[14px] rounded-[7px] py-2 resize-none"
        ></textarea>
      ) : (
        <input
          type={type}
          className={`rounded-[7px] w-[210px] h-[28px] py-4 bg-white bg-opacity-[0.20] focus:bg-opacity-25 outline-0 px-2 text-[14px]`}
        />
      )}
    </div>
  );
};

export default Input;
