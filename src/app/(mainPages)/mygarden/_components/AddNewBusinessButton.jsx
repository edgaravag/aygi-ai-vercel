"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "@public/icons/plusIcon.svg";
import dynamic from "next/dynamic";
const AddNewBusiness = dynamic(() =>
  import("@/src/components/modals/AddNewBusiness/AddNewBusiness")
);

const AddNewBusinessButton = () => {
  const [showAddNewBusiness, setShowAddNewBusiness] = useState(false);

  return (
    <>
      <button
        className="flex items-center w-[704px] mx-auto p-1 gap-2 text-[#68BB59] font-normal"
        onClick={() => setShowAddNewBusiness(true)}
      >
        Add New Business
        <Image src={PlusIcon} alt="Plus Icon" />
      </button>
      {showAddNewBusiness && (
        <AddNewBusiness onClose={() => setShowAddNewBusiness(false)} />
      )}
    </>
  );
};

export default AddNewBusinessButton;
