import Image from "next/image";

const SingleFavoriteGarden = ({ image }) => {
  return (
    <>
      <Image
        alt=""
        src={image}
        width={206}
        height={242}
        className="cursor-pointer"
      />
    </>
  );
};

export default SingleFavoriteGarden;
