"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Followers = dynamic(() =>
  import("@/src/components/modals/Followers/Followers")
);

const ShowFollowers = () => {
  const [showFollowers, setShowFollowers] = useState(false);

  return (
    <>
      <button className="font-normal" onClick={() => setShowFollowers(true)}>
        <span className="font-semibold">200</span> Followers
      </button>
      {showFollowers && <Followers onClose={() => setShowFollowers(false)} />}
    </>
  );
};

export default ShowFollowers;
