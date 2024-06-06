import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const DeleteDetection = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className="p-8">
      <h2 className="font-semibold text-xl text-center">Delete Detection</h2>
      <p className="mt-[20px]">
        Are you sure you want to delete{" "}
        <span className="font-semibold">this detection?</span>
      </p>
      <div className="flex justify-between mt-6">
        <Button className="border border-[#68BB59] text-[#68BB59] text-sm py-2.5 px-9">
          No, Cancel
        </Button>
        <Button className="bg-[#318C21] text-white text-sm py-2.5 px-9">
          Yes, Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteDetection;
