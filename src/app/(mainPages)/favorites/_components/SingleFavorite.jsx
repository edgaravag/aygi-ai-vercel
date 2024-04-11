import Image from "next/image";
import Link from "next/link";

const SingleFavorite = ({ favorite }) => {
  return (
    <Link
      href={"/user"}
      className="flex flex-col gap-4 items-center"
    >
      <Image alt="" src={favorite.img} width={84} height={84} />
      <p>{favorite.name}</p>
    </Link>
  );
};

export default SingleFavorite;
