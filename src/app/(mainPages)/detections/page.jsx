'use client'
import { useState, useEffect } from "react";
import DeleteAllButton from "./_components/DeleteAllButton";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import SingleDetection from "./_components/SingleDetection";
import DetectionImage from "@public/plants/detectionImage.webp";
import axiosInstance from "@/src/utils/axiosInstance";
import axios from "axios";

const Detections = () => {
  const [detections, setDetections] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:8080/detections", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {
        console.log(res.data);
        setDetections(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col w-full gap-4">
      <h2 className="font-semibold text-lg tracking-wider">Detection History</h2>
        {detections.map((detection) => {
          return <SingleDetection key={detection.id} detection={detection} />;
        })}
        <div className="flex items-center justify-between mt-9">
          <DeleteAllButton />
          <PrevAndNextPages />
        </div>
      </div>
    </div>
  );
};

export default Detections;
