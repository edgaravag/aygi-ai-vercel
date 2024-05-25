const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");
const { default: axiosInstance } = require("../utils/axiosInstance");

export default function useGetUserPhoto() {
  const [userImage, setUserImage] = useState(null);
  const userData = useSelector((state) => state?.userData?.userData);

  useEffect(() => {
    if (userData && userData.id) {
      axiosInstance
      .get(`/images/${userData.id}`)
      .then((res) => {
        setUserImage(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, [userData])
    
    return userImage;
};
