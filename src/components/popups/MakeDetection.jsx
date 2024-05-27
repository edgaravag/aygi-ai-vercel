import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import MakeDetectionIcon1 from "@public/icons/makeDetectionIcon1.webp";
import UploadImage from "@public/icons/uploadImageIcon.svg";
import DetectionImage from "@public/plants/detectionImg.webp";
import GarbageIcon from "@public/icons/garbageIcon.webp";
import Button from "../ui/Button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setGeminiText } from "@/src/store/features/geminiTextSlice/geminiTextSlice";

const MakeDetection = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const handleSendImage = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/gemini/image`,
        formData,
        config
      );

      const generatedText =
        response?.data?.candidates[0]?.content?.parts[0]?.text;

      dispatch(
        setGeminiText({
          text: generatedText,
          image: imageURL,
        })
      );

      onClose();
      router.push("/detections/view");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <PopUpWrap onClose={onClose} className="p-8">
      <div className="flex gap-12">
        <div className="pt-[26px] border-2 border-[#68BB59] rounded-md h-fit">
          <div className="px-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#66B059] py-2 px-4">
                <Image src={MakeDetectionIcon1} alt="" />
              </div>
              <p className="text-lg font-semibold">Plant Identification</p>
            </div>
            <p className="mt-4 w-[320px] leading-7">
              Press ‘Plant Identification’, upload a clear image of the plant in
              question, and get its name, detailed care instructions, and
              fascinating facts about it.
            </p>
          </div>
          <div className="mt-[26px] pt-4 pb-[26px] px-4 bg-[#68BB59]">
            <p className="text-lg font-semibold">
              Upload photo to identify plant
            </p>
            <div className="relative w-full mt-6 h-[208px] overflow-hidden center flex-col bg-white rounded-md">
              {!imageURL && (
                <>
                  <div
                    className="flex flex-col items-center"
                    onClick={handleClick}
                  >
                    <Image
                      src={UploadImage}
                      alt="Upload Image Icon"
                      width={38}
                      height={35}
                      className="w-[38px] h-[35px]"
                    />
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <button className="mt-1 text-[#68BB59] text-xs">
                      Select Image
                    </button>
                  </div>
                  <p className="text-[#B3B3B3] text-xs mt-1">
                    Support png /jpg / jpeg
                  </p>
                </>
              )}
              {imageURL && (
                <div className="absolute z-10 w-full h-full">
                  <button
                    className="absolute left-2 top-2"
                    onClick={() => {
                      setSelectedImage(null);
                      setImageURL(null);
                    }}
                  >
                    <div className="absolute center bg-[#68BB59] size-[40px] rounded-full cursor-pointer">
                      <Image
                        src={GarbageIcon}
                        alt="Garbage Icon"
                        width={20}
                        height={24}
                        className="w-[20px] h-6"
                      />
                    </div>
                  </button>

                  <img
                    src={imageURL}
                    alt="Selected Image"
                    className="w-full h-full object-cover"
                  />
                  {isLoading && (
                    <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-lg">
                      Wait for response...
                    </p>
                  )}
                </div>
              )}
            </div>
            {isLoading && <p className="mt-2">Wait for response...</p>}
            <Button
              className="mt-6 py-2.5 px-3 mx-auto text-white bg-[#808080]"
              onClick={handleSendImage}
              disabled={isLoading}
            >
              Plant Identification
            </Button>
          </div>
        </div>
        <div className="pt-[26px] border-2 border-[#68BB59] rounded-md h-fit">
          <div className="px-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#66B059] py-2 px-4">
                <Image src={MakeDetectionIcon1} alt="" />
              </div>
              <p className="text-lg font-semibold">Disease Detection</p>
            </div>
            <p className="mt-4 w-[320px] leading-7">
              Select ‘Disease Detection’, upload a clear photo of your plant's
              issue, and quickly receive a diagnosis along with treatment options
              and preventive measures.
            </p>
          </div>
          <div className="mt-[26px] pt-4 pb-[26px] px-4 bg-[#68BB59]">
            <p className="text-lg font-semibold">
              Upload photo to disease analysis
            </p>
            <div className="relative w-full mt-6 h-[208px] center flex-col bg-white rounded-md">
              <Image
                src={DetectionImage}
                alt="Upload Photo Image"
                width={320}
                height={208}
                className="w-full h-full object-cover"
              />
              <div className="absolute center bg-[#68BB59] size-[40px] top-3 right-3 rounded-full cursor-pointer">
                <Image
                  src={GarbageIcon}
                  alt="Garbage Icon"
                  width={20}
                  height={24}
                  className="w-[20px] h-6"
                />
              </div>
            </div>
            <Button className="mt-8 py-2.5 px-3 mx-auto text-white bg-[#318C21]">
              Disease detection
            </Button>
          </div>
        </div>
      </div>
    </PopUpWrap>
  );
};

export default MakeDetection;
