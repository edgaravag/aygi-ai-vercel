import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import axiosInstance from "@/src/utils/axiosInstance";

const DeletePost = ({ onClose, postId }) => {
  const handleDeletePost = () => {
    axiosInstance
      .delete(`post/${postId}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <Modal onClose={onClose} className="p-8">
      <p className="font-semibold text-xl text-center">Delete Post</p>
      <p className="mt-5 text-center">
        Are you sure you want to delete{" "}
        <span className="font-semibold">your post?</span>
      </p>
      <div className="flex gap-[74px] mt-6">
        <Button
          className="py-2.5 px-9 text-[#68BB59] border border-[#68BB59]"
          onClick={onClose}
        >
          No, Cancel
        </Button>
        <Button
          className="py-2.5 px-9 text-white bg-[#E32418]"
          onClick={handleDeletePost}
        >
          Yes, Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeletePost;
