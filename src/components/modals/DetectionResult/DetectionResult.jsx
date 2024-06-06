import Image from "next/image";
import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import axiosInstance from "@/src/utils/axiosInstance";
import getSectionContent from "@/src/utils/getSectionContent";
import { useRouter } from "next/navigation";

const DetectionResult = ({ onClose }) => {
  const geminiText = useSelector((state) => state?.geminiText?.text);
  const geminiImage = useSelector((state) => state?.geminiText?.image);

  const lines = geminiText ? geminiText.split("\n") : [];

  const plantCategory = getSectionContent(geminiText, " Plant Category");
  const plantName = getSectionContent(geminiText, "Plant Name");
  const aboutDiseaseIndex = lines.findIndex((l) =>
    l.startsWith("About the Plant Disease:"),
  );
  const aboutTreatmentIndex = lines.findIndex((l) =>
    l.startsWith("About Treatment:"),
  );
  const inConclusionIndex = lines.findIndex((l) =>
    l.startsWith("In conclusion"),
  );
  const conclusionIndex = lines.findIndex((l) => l.startsWith("Сonclusion:"));

  const aboutPlantIndex = lines.findIndex((l) =>
    l.startsWith("About the Plant:"),
  );

  const aboutPlant =
    aboutPlantIndex !== -1 ? lines.slice(aboutPlantIndex).join("\n") : "";
  const careInstructionsIndex = lines.findIndex((l) =>
    l.startsWith("How to Care for the Morning Glory:"),
  );

  const aboutDisease =
    aboutDiseaseIndex !== -1
      ? lines.slice(aboutDiseaseIndex + 1, aboutTreatmentIndex).join("\n")
      : "";
  const aboutTreatment =
    aboutTreatmentIndex !== -1
      ? lines
          .slice(aboutTreatmentIndex + 1, inConclusionIndex || conclusionIndex)
          .join("\n")
      : "";

  const inConclusion =
    inConclusionIndex !== -1 ? lines.slice(inConclusionIndex).join("\n") : "";

  const сonclusion =
    conclusionIndex !== -1 ? lines.slice(conclusionIndex).join("\n") : "";

  const router = useRouter();
  const handleSaveDetection = () => {
    const image = new Blob([geminiImage], { type: "image/jpeg" });

    axiosInstance
      .post(
        "detections/save",
        { text: plantName, image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        onClose();
        router.push("/detections");
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
          <p className="text-lg whitespace-pre-line">
            {aboutPlant.replace("About the Plant:", "").replace("\n\n", "")}
          </p>
        </div>
      )}

      {aboutDisease && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            About the Plant Disease:
          </h2>
          <p className="text-lg whitespace-pre-line">{aboutDisease}</p>
        </div>
      )}

      {aboutTreatment && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About Treatment:</h2>
          <p className="text-lg whitespace-pre-line">{aboutTreatment}</p>
        </div>
      )}

      {inConclusion && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">In Conclusion:</h2>
          <p className="text-lg whitespace-pre-line">
            {inConclusion.replace("In conclusion, ", "")}
          </p>
        </div>
      )}

      {сonclusion && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion:</h2>
          <p className="text-lg whitespace-pre-line">{сonclusion}</p>
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
