"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import CreateServiceIcon from "@public/icons/createServiceIcon.webp";
const CreateService = dynamic(() =>
  import("@/src/components/modals/CreateService")
);

const CreateServiceAndProduct = () => {
  const [showCreateService, setShowCreateService] = useState(false);
  return (
    <>
      <Image
        src={CreateServiceIcon}
        alt="Create Service Icon"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => setShowCreateService(true)}
      />
      {showCreateService && (
        <CreateService onClose={() => setShowCreateService(false)} />
      )}
    </>
  );
};

export default CreateServiceAndProduct;
