"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Button from "@/src/components/ui/Button";
const DeleteAllDetections = dynamic(() =>
  import("@/src/components/modals/DeleteAllDetections")
);

const DeleteAllButton = () => {
  const [showDeleteAll, setShowDeleteAll] = useState(false);

  return (
    <>
      <Button
        className="px-10 py-2.5 text-sm text-[#68BB59] border border-[#68BB59]"
        onClick={() => setShowDeleteAll(true)}
      >
        Delete All
      </Button>
      {showDeleteAll && (
        <DeleteAllDetections onClose={() => setShowDeleteAll(false)} />
      )}
    </>
  );
};

export default DeleteAllButton;
