import React from "react";
import Image from "next/image";
import ArrowDown from "@public/icons/arrowDown.webp";
import { countries } from "@/src/constants/countriesList";

const CountriesList = ({ setShowCountries }) => {
  return (
    <div className="absolute right-[41px] top-[60px] z-10 bg-white w-[230px] h-[544px] border border-[#68BB59] rounded-md">
      <div className="flex items-center justify-between pl-4 pr-1">
        <button className="text-sm text-[#808080] py-[6px]">
          Choose Country
        </button>
        <div className="center size-6">
          <Image src={ArrowDown} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col h-[511px] overflow-y-scroll">
        {countries.map((country) => {
          return (
            <div
              key={country}
              className="w-full cursor-pointer px-4 py-[14px] hover:bg-[#E5F7E2]"
              onClick={() => setShowCountries(false)}
            >
              <p className="text-sm text-[#808080]">{country}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
