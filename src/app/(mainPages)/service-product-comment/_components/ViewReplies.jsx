"use client";
import { useState } from "react";
import Image from "next/image";
import ReplyIcon from "@public/icons/reply.svg";
import UserIcon from "@public/users/friendIcon.webp";

import SingleReply from "./SingleReply";

const replies = [
  {
    img: UserIcon.src,
    username: "William Smith",
    reply: "I love this fertilizier!!! Super!!!",
  },
  {
    img: UserIcon.src,
    username: "William Smith",
    reply: "I love this fertilizier!!! Super!!!",
  },
  {
    img: UserIcon.src,
    username: "William Smith",
    reply: "I love this fertilizier!!! Super!!!",
  },
];

const ViewReplies = () => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <>
      <button
        className="flex gap-1 mt-2 mb-3 underline text-[#808080]"
        onClick={() => setShowReplies(!showReplies)}
      >
        <Image src={ReplyIcon} alt="Reply Icon" width={14} height={13} />
        View 5 reply
      </button>
      <div className="flex flex-col gap-4 ml-[102px]">
        {showReplies &&
          replies.map((reply, index) => {
            return (
              <div key={index}>
                <SingleReply reply={reply} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ViewReplies;
