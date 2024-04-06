import Image from "next/image";
import SunIcon from "@public/icons/sunIcon.webp";
import SunIconCore from "@public/icons/sunIconCore.webp";

const Weather = () => {
  return (
    <div className="flex gap-2">
      <div className="center gap-[7px]">
        <div className="relative">
          <Image src={SunIcon} alt="" />
          <Image
            src={SunIconCore}
            alt=""
            className="absolute top-[5px] right-0 left-1 bottom-0"
          />
        </div>
        <p className="text-lg font-medium">27°C</p>
      </div>
      <p className="text-lg font-normal">Yerevan</p>
    </div>
  );
};

export default Weather;
