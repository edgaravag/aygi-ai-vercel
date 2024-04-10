import BusinessLogo from "./_components/BusinessLogo";
import BusinessName from "./_components/BusinessName";
import CreateServiceAndProduct from "./_components/ServiceProducts";
import SingleBusiness from "./_components/SingleBusiness";
import WriteTheNews from "./_components/WriteTheNews";
import PostImage2 from "@public/plants/feedPostImg2.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";

const businesses = [
  {
    userName: "Business name",
    postDate: "Post Date",
    postName: "Post Name",
    businessImg: PostImage2.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
  {
    userName: "Business name",
    postDate: "Post Date",
    postName: "Post Name",
    businessImg: PostImage2.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
];

const MyBusinessPage = () => {
  return (
    <div className="bg-white py-9 px-24">
      <div className="max-w-[571px]">
        <BusinessLogo />
        <BusinessName />
        <CreateServiceAndProduct />
        <WriteTheNews />
        <div className="mt-6">
          {businesses.map((business, index) => {
            return (
              <div key={index}>
                <SingleBusiness business={business} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyBusinessPage;
