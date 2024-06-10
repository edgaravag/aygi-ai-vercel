// CitiesList.js
import Image from "next/image";
import ArrowDown from "@public/icons/arrowDown.webp";
import { useDispatch } from "react-redux";
import { setSelectedCity } from "@/src/store/features/selectedCitySlice/selectedCitySlice";

const CitiesList = ({ cities, setSelectedCountry, setShowCountries }) => {
  const dispatch = useDispatch();

  return (
    <div className="absolute z-10 right-[240px] top-[75px] bg-white w-[230px] h-[400px] border border-[#68BB59] rounded-md">
      <div className="flex items-center justify-between pl-4 pr-1">
        <button className="text-sm text-[#808080] py-[6px]">Cities</button>
        <div className="center size-6">
          <Image src={ArrowDown} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col h-[360px] overflow-y-scroll">
        {cities?.map((city, index) => (
          <div
            key={index}
            className="w-full cursor-pointer px-4 py-[14px] hover:bg-[#E5F7E2]"
            onClick={() => {
              setSelectedCountry(null);
              setShowCountries(false);
              console.log(city);
              dispatch(setSelectedCity(city));
            }}
          >
            <p className="text-sm text-[#808080]">{city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesList;
