import Image from "next/image";
import NextUser from "@public/icons/nextUser.webp";
import FavoriteUserIcon from "@public/users/favoriteUser.webp";
import ProfileImg1 from "@public/plants/profileImg1.webp";
import ProfileImg2 from "@public/plants/profileImg2.webp";
import ProfileImg3 from "@public/plants/profileImg3.webp";
import ProfileImg4 from "@public/plants/profileImg4.webp";
import ProfileImg5 from "@public/plants/profileImg5.webp";
import ProfileImg6 from "@public/plants/profileImg6.webp";
import SingleFavorite from "./_components/SingleFavorite";
import SingleFavoriteGarden from "./_components/SingleFavoriteGarden";

const favorites = [
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
];

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];
const FavoritesComponent = () => {
  return (
    <main className="mx-auto py-9 px-[60px] ">
      <h2 className="font-semibold text-xl">My Favorite Users</h2>
      <div className="flex items-center gap-5">
        <div className="mt-6 flex gap-4">
          {favorites.map((favorite, index) => {
            return <SingleFavorite favorite={favorite} key={index} />;
          })}
        </div>
        <div>
          <Image alt="" src={NextUser} />
        </div>
      </div>
      <h2 className="font-semibold text-xl mt-10">My Favorite Gardens</h2>
      <div className="flex flex-wrap gap-3 w-[642px] mt-6">
        {images.map((image, index) => {
          return <SingleFavoriteGarden image={image} key={index} />;
        })}
      </div>
    </main>
  );
};

export default FavoritesComponent;
