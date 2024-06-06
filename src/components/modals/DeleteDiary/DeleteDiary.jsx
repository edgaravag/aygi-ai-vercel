import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import axiosInstance from "@/src/utils/axiosInstance";

const DeleteDiary = ({ onClose, diaryId }) => {
  const handleDeleteDiary = () => {
    axiosInstance
      .delete(`diary/${diaryId}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting diary:", error);
      });
  };

  return (
    <Modal onClose={onClose} className="p-8">
      <p className="font-semibold text-xl text-center">Delete Diary</p>
      <p className="mt-5 text-center">
        Are you sure you want to delete{" "}
        <span className="font-semibold">your diary?</span>
      </p>
      <div className="flex gap-[74px] mt-6">
        <Button
          className="py-2.5 px-9 text-[#68BB59] border border-[#68BB59]"
          onClick={() => onClose()}
        >
          No, Cancel
        </Button>
        <Button
          className="py-2.5 px-9 text-white bg-[#E32418]"
          onClick={handleDeleteDiary}
        >
          Yes, Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteDiary;
