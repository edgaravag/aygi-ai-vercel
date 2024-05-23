import Button from "../ui/Button";
import PopUpWrap from "../ui/PopUpWrap";

const DeleteDiary = ({ onClose }) => {
  return (
    <PopUpWrap onClose={onClose} className="p-8">
      <p className="font-semibold text-xl text-center">Delete Diary</p>
      <p className="mt-5 text-center">Are you sure you want to delete <span className="font-semibold">your diary?</span></p>
      <div className="flex gap-[74px] mt-6">
        <Button className="py-2.5 px-9 text-[#68BB59] border border-[#68BB59]">No, Cancel</Button>
        <Button className="py-2.5 px-9 text-white bg-[#E32418]">Yes, Delete</Button>
      </div>
    </PopUpWrap>
  );
};

export default DeleteDiary;
