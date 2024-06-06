import { useState } from "react";
import Modal from "../../ui/Modal";
import PlantIdentification from "./components/PlantIdentification";
import DiseaseDetection from "@/src/components/modals/MakeDetection/components/DiseaseDetection";

const MakeDetection = ({ onClose, setShowDetectionResult }) => {
  const [option, setOption] = useState(true);

  return (
    <Modal onClose={onClose} className="p-8">
      <button className="flex gap-4 mb-4" onClick={() => setOption(!option)}>
        Choose{" "}
        <p className="font-medium">
          {option ? "Disease detection" : "Plant identification"}
        </p>
      </button>
      {option ? (
        <PlantIdentification
          setShowDetectionResult={setShowDetectionResult}
          onClose={onClose}
        />
      ) : (
        <DiseaseDetection
          onClose={onClose}
          setShowDetectionResult={setShowDetectionResult}
        />
      )}
    </Modal>
  );
};

export default MakeDetection;
