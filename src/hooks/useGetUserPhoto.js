const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");
const { default: axiosInstance } = require("../utils/axiosInstance");

export default function useGetUserPhoto() {
  const [userImage, setUserImage] = useState(null);
  const userId = useSelector((state) => state?.userData?.userData?.id);

  useEffect(() => {
    if (userId) {
      axiosInstance
        .get(`/images/${userId}`, { responseType: "blob" })
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
  }, []);

  return userImage;
}
