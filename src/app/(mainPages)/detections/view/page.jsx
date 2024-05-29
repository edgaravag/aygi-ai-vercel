"use client";
import Image from "next/image";
import UploadedPhotoImg from "@public/plants/detectionImg.webp";
import { useSelector } from "react-redux";

const ViewPage = () => {
	const geminiText = useSelector((state) => state?.geminiText?.text);
	const geminiImage = useSelector((state) => state?.geminiText?.imageURL);
  // console.log(JSON.parse(geminiText));

  const lines = geminiText ? geminiText.split("\n") : [];

  const getSectionContent = (lines, title) => {
    const line = lines.find((l) => l.startsWith(title));
    return line ? line.replace(`${title}:`, "").trim() : "";
  };

  const plantCategory = getSectionContent(lines, "Plant Category");
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

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Plant Identification Result</h1>
      <Image
        src={geminiImage ? geminiImage : UploadedPhotoImg}
        alt="Uploaded Plant"
        className="mb-6 rounded-lg"
      />

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
    </div>
  );
};

export default ViewPage;
