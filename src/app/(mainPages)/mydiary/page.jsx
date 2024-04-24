import Image from "next/image";
import DiaryImage from "@public/plants/diaryPageImage.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import ShowEditDiary from "./_components/ShowEditDiary";
import MakePrivate from "./_components/MakePrivate";
import GardenJournalEntry from "./_components/GardenJournalEntry";
import SingleComment from "./_components/SingleComment";

const posts = [
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
];

const DiaryPage = () => {

  return (
    <>
      <div className="bg-[#f7f7f7] rounded-md">
        <div className="w-[688px] mx-auto">
          <div className="flex items-center justify-between gap-5">
            <h2 className="font-semibold tracking-widest">
              Information about Pepper Plant
            </h2>
            <div className="flex gap-5">
              <ShowEditDiary />
              <MakePrivate />
            </div>
          </div>
          <div>
            <p className="text-[#808080] leading-[22px] text-justify mt-4">
              Unite with a global network of dedicated gardeners who are as
              passionate about plants as you are. From beginners to seasoned
              experts, our community offers a platform to connect, learn, and
              grow together. Engage in discussions, share your gardening
              achievements, and seek advice from experienced gardeners across
              continents. Together, we nurture a thriving community that
              celebrates the beauty and joy of gardening.
            </p>
          </div>
          <div className="mt-4">
            <Image src={DiaryImage} alt="" className="w-full" />
          </div>
          <div className="w-[570px] mx-auto my-5">
            <GardenJournalEntry />
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post, index) => {
              return (
                <SingleComment post={post} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
