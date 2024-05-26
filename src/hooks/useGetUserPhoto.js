const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");
const { default: axiosInstance } = require("../utils/axiosInstance");

export default function useGetUserPhoto() {
  const [userImage, setUserImage] = useState(null);
  const imageId = useSelector((state) => state?.imageId?.imageId);
  // console.log(imageId);

  useEffect(() => {
    if (imageId) {
      axiosInstance
        .get(`/images/${imageId}`, { responseType: "blob" })
        .then((res) => {
          console.log(res);
          const reader = new FileReader();
          reader.readAsDataURL(res.data);
          reader.onloadend = () => {
            setUserImage(reader.result);
          };
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [imageId]);

  return userImage;
}
