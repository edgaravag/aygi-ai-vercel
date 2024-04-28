import Image from "next/image";
import SaveIcon from "@public/icons/save.svg";
import BlockUserIcon from "@public/icons/blockUser.svg";
import UnsubscribeIcon from "@public/icons/unsubscribe.svg";
import SpamIcon from "@public/icons/spam.svg";

const actions = [
  { img: SaveIcon.src, title: "Save Post" },
  { img: BlockUserIcon.src, title: "Block User" },
  { img: UnsubscribeIcon.src, title: "Unsubscribe" },
  { img: SpamIcon.src, title: "Spam" },
];

const ShowMore = () => {
  return (
    <div className="flex flex-col gap-1 absolute top-11 right-11 border border-black rounded-md bg-white py-2 pl-4 pr-[88px]">
      {actions.map((action) => {
        return (
          <div
            className="flex items-center gap-2 py-3 cursor-pointer"
            key={action.title}
          >
            <Image
              src={action.img}
              alt="Actions Image"
              width={17}
              height={22}
            />
            <p>{action.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowMore;
