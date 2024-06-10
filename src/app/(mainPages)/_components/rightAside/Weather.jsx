import Image from "next/image";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ setErrorMessage }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const city = useSelector((state) => state?.selectedCity?.selectedCity);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city ? city : "Yerevan"}&units=metric&appid=${process.env.NEXT_PUBLIC_MY_API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        setWeatherInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.response.data.message);
      });
  }, [city]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="center gap-[7px]">
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@2x.png`}
            alt="Weather icon"
            width={50}
            height={50}
          />
          <p className="text-lg font-medium">
            {weatherInfo?.main?.temp.toFixed(0)}°C
          </p>
        </div>
        <p className="text-lg font-normal">
          {weatherInfo?.name ? weatherInfo?.name : city}
        </p>
      </div>
    </div>
  );
};

export default Weather;