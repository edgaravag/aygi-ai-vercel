// CountriesList.js
import Image from "next/image";
import ArrowDown from "@public/icons/arrowDown.webp";
import { useState, useEffect } from "react";
import axios from "axios";
import CitiesList from "./CitiesList";

const CountriesList = ({ setShowCountries }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCities, setShowCities] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_GET_COUNTRIES_API_URL}`)
      .then((response) => {
        setCountries(response.data.data);
      });
  }, []);

  return (
    <div className="absolute right-[41px] top-[65px] z-10 bg-white w-[230px] h-[544px] border border-[#68BB59] rounded-md">
      <div className="flex items-center justify-between pl-4 pr-1">
        <button className="text-sm text-[#808080] py-[6px]">
          Choose Country
        </button>
        <div className="center size-6">
          <Image src={ArrowDown} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col h-[511px] overflow-y-scroll">
        {countries?.map((country) => (
          <div key={country.country}>
            <div
              className="w-full cursor-pointer px-4 py-[14px] hover:bg-[#E5F7E2]"
              onClick={() => {
                setSelectedCountry(country);
                setShowCities(true);
              }}
            >
              <p className="text-sm text-[#808080]">{country.country}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedCountry && showCities && (
        <CitiesList
          cities={selectedCountry.cities}
          setSelectedCountry={setSelectedCountry}
          setShowCountries={setShowCountries}
        />
      )}
    </div>
  );
};

export default CountriesList;
