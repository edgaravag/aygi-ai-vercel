"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Followwings = dynamic(() => import("@/src/components/modals/Followings/Followings"));

const ShowFollowings = () => {
  const [showFollowings, setShowFollowings] = useState(false);

  return (
    <>
      <button className="font-normal" onClick={() => setShowFollowings(true)}>
        <span className="font-semibold">500</span> Followings
      </button>
      {showFollowings && (
        <Followwings onClose={() => setShowFollowings(false)} />
      )}
    </>
  );
};

export default ShowFollowings;
