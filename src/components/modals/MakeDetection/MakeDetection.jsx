import { useState } from "react";
import Modal from "../../ui/Modal";
import PlantIdentification from "./components/PlantIdentification";
import DiseaseDetection from "@/src/components/modals/MakeDetection/components/DiseaseDetection";
import Dropdown from "./components/Dropdown";  // Adjust the path as necessary

const MakeDetection = ({ onClose, setShowDetectionResult }) => {
  const [option, setOption] = useState("disease");

  const handleDropdownChange = (value) => {
    setOption(value);
  };

  return (
    <Modal onClose={onClose} className="p-8">
      <div className="flex gap-4 mb-4 items-center"> {/* Added items-center */}
        <span>Choose</span>
        <Dropdown selectedOption={option} onChange={handleDropdownChange} />
      </div>
      {option === "plant" ? (
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
