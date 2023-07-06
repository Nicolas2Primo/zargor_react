import React from "react";

const DragonfruitSection = () => {
  return (
    <div className="flex flex-col pl-[22px] md:pl-[48px] w-screen h-screen pb-20 md:pb-32 text-white justify-end">
      <span className="tracking-[0.15rem] font-semibold text-[12px] md:text-[16px]">
        SIMPLY MEANINGFUL VIDEO{" "}
      </span>

      <span className="text-[18px] md:text-[55px] font-black">Dragonfruit</span>

      <div className="flex flex-col gap-4">
        <span className="tracking-[0.15rem] font-semibold text-[12px] md:text-[13px]">
          Built for Multi-Location Enterprises
        </span>
        <button className="flex bg-[#FBBF24] w-fit px-3 py-1 rounded-[30px] text-black font-semibold">
          View prices
        </button>
      </div>
    </div>
  );
};

export default DragonfruitSection;
