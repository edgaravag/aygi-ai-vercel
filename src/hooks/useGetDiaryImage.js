import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useGetDiaryImage(diaryId) {
  const [diaryImage, setDiaryImage] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`diary/image/${diaryId}`, { responseType: "blob" })
      .then((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
          setDiaryImage(reader.result);
        };
      })
      .catch((error) => {
        console.error("Error fetching diary image:", error);
      });
  }, [diaryId]);
    
    return diaryImage;
}
