"use client";
import Image from "next/image";
import UploadedPhotoImg from "@public/plants/detectionImg.webp";
import { useSelector } from "react-redux";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import axiosInstance from "@/src/utils/axiosInstance";
import axios from "axios";

const DetectionResult = ({ onClose }) => {
  const geminiText = useSelector((state) => state?.geminiText?.text);
  const geminiImage = useSelector((state) => state?.geminiText?.image);

  const lines = geminiText ? geminiText.split("\n") : [];

  const getSectionContent = (lines, title) => {
    const line = lines.find((l) => l.startsWith(title));
    return line ? line.replace(`${title}:`, "").trim() : "";
  };

  const plantCategory = getSectionContent(lines, " Plant Category");
  const plantName = getSectionContent(lines, "Plant Name");
  const aboutPlantIndex = lines.findIndex((l) =>
    l.startsWith("About the Plant:")
  );
  const aboutPlant =
    aboutPlantIndex !== -1 ? lines.slice(aboutPlantIndex).join("\n") : "";
  const careInstructionsIndex = lines.findIndex((l) =>
    l.startsWith("How to Care for the Morning Glory:")
  );
  const careInstructions =
    careInstructionsIndex !== -1
      ? lines.slice(careInstructionsIndex).join("\n")
      : "";

  const handleSaveDetection = () => {
    // axiosInstance.post('detections/save', { text: plantName, image: geminiImage })
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    const token = localStorage.getItem("accessToken");

  const image = new Blob([geminiImage], { type: "image/jpeg" });

    axios
      .post("http://localhost:8080/detections/save", {
        text: geminiText,
        image,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((res) => {
        console.log(res.data);
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Modal onClose={onClose} className="w-[720px] p-6">
      <h1 className="text-3xl font-bold mb-6">Plant Identification Result</h1>
      {geminiImage ? (
        <img
          src={`data:image/jpeg;base64,${geminiImage}`}
          width={240}
          height={180}
          alt="Uploaded Plant"
          className="mb-6 rounded-lg"
        />
      ) : (
        <Image
          src={UploadedPhotoImg}
          width={240}
          height={180}
          alt="Uploaded Plant"
          className="mb-6 rounded-lg"
        />
      )}

      {plantCategory && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Plant Category:</h2>
          <p className="text-lg">{plantCategory}</p>
        </div>
      )}

      {plantName && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Plant Name:</h2>
          <p className="text-lg">{plantName}</p>
        </div>
      )}

      {aboutPlant && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About the Plant:</h2>
          <p className="text-lg whitespace-pre-line">{aboutPlant}</p>
        </div>
      )}

      {careInstructions && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            How to Care for the Morning Glory:
          </h2>
          <div className="text-lg whitespace-pre-line">{careInstructions}</div>
        </div>
      )}

      <div className="flex justify-center gap-3">
        <Button
          className="py-2.5 px-8 border border-[#A5A5A5] text-[#A5A5A5]"
          onClick={onClose}
        >
          Ok
        </Button>
        <Button
          className="py-2.5 px-8 bg-[#318C21] text-white"
          onClick={handleSaveDetection}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default DetectionResult;
