"use client";
import { useState } from "react";
import Image from "next/image";
import CountriesList from "./CountriesList";
import Info from "./Info";
import EditIcon from "@public/icons/editIcon.webp";
import InfoIcon from "@public/icons/info.webp";
import Button from "@/src/components/ui/Button";
import CitiesList from "./CitiesList";

const EditCountry = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  return (
    <>
      <div className="center gap-2 cursor-pointer">
        <div
          className="flex gap-2"
          onClick={() => setShowCountries(!showCountries)}
        >
          <Button>
            <Image src={EditIcon} alt="" />
          </Button>
          <Button className="font-normal text-[#68BB59]">Edit</Button>
        </div>
        <div
          className="relative z-50"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <Image
            src={InfoIcon}
            alt=""
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      {showCountries && <CountriesList setShowCountries={setShowCountries} />}
      {showInfo && <Info />}
    </>
  );
};

export default EditCountry;
