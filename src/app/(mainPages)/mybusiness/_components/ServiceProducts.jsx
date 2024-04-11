import Image from "next/image";
import BusinessIcon from "@public/icons/blueBusinessIcon.webp";
import NextUser from "@public/icons/nextUser.webp";
import CreateService from "./CreateService";

const icons = [
  BusinessIcon.src,
  BusinessIcon.src,
  BusinessIcon.src,
  BusinessIcon.src,
  BusinessIcon.src,
];

const ServiceProducts = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Service/Products</h2>
      <div className="flex items-center gap-4 mt-3">
        <CreateService />
        {icons.map((icon, index) => {
          return (
            <Image
              src={icon}
              alt="Business Icon"
              key={index}
              width={80}
              height={80}
              className="cursor-pointer"
            />
          );
        })}
        <div className="cursor-pointer">
          <Image alt="Next" src={NextUser} />
        </div>
      </div>
    </div>
  );
};

export default ServiceProducts;
