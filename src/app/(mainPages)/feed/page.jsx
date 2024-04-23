import FeedSinglePost from "./_components/FeedSinglePost";
import PostImage1 from "@public/plants/feedPostImg1.webp";
import PostImage2 from "@public/plants/feedPostImg2.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import GardenJournalEntry from "./_components/GardenJournalEntry";

const posts = [
  {
    userName: "User Name",
    postDate: "Post Date",
    postName: "Post Name",
    feedImg: PostImage1.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
  {
    userName: "User Name",
    postDate: "Post Date",
    postName: "Post Name",
    feedImg: PostImage2.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
];

const FeedComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-[571px] mx-auto flex mb-2">
          <GardenJournalEntry />
        </div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <FeedSinglePost post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeedComponent;
