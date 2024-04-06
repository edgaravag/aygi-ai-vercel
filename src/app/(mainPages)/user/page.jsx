import ProfileImg1 from "@public/plants/profileImg1.webp";
import ProfileImg2 from "@public/plants/profileImg2.webp";
import ProfileImg3 from "@public/plants/profileImg3.webp";
import ProfileImg4 from "@public/plants/profileImg4.webp";
import ProfileImg5 from "@public/plants/profileImg5.webp";
import ProfileImg6 from "@public/plants/profileImg6.webp";
import ProfileInfo from "./_components/ProfileInfo";
import FollowAndMessageButtons from "./_components/FollowAndMessageButtons";
import SingleImage from "./_components/SingleImage";

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];

const UserProfileComponent = () => {
  return (
    <main className="h-screen mx-auto py-9 px-[95px]">
      <div className="w-[617px]">
        <ProfileInfo />
        <FollowAndMessageButtons />
        <div className="grid grid-rows-2 grid-cols-3 gap-3 mt-8">
          {images.map((image, index) => {
            return (
              <SingleImage image={image} key={index} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default UserProfileComponent;
