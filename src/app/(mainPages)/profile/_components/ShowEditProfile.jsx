"use client";
import { useState } from "react";
import Image from "next/image";
import GreenPen from "@public/icons/greenPen.webp";
import dynamic from "next/dynamic";
const EditProfile = dynamic(() =>
  import("@/src/components/modals/EditProfile/EditProfile")
);

const ShowEditProfile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <>
      <button
        className="flex gap-2 font-normal underline text-[#68BB59]"
        onClick={() => setShowEditProfile(true)}
      >
        Edit Profile
        <Image src={GreenPen} alt="" />
      </button>
      {showEditProfile && (
        <EditProfile setShowEditProfile={setShowEditProfile} />
      )}
    </>
  );
};

export default ShowEditProfile;
