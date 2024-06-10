import { useState } from "react";

export default function useUploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  const resetImage = () => {
    setSelectedImage(null);
    setImageURL(null);
  };

  return {
    selectedImage,
    imageURL,
    handleImageChange,
    resetImage,
  };
};