import Image from "next/image";
import UploadIcon from "@public/icons/userUploadImage.webp";

const UploadImage = ({ handleImageChange }) => {
  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div
      className="cursor-pointer self-end flex text-[#808080]"
      onClick={handleClick}
    >
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <Image src={UploadIcon} alt="Upload Image" className="mr-2" />
      Upload image
    </div>
  );
}

export default UploadImage