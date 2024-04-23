import Image from "next/image";
import ServiceProductImg from "@public/plants/service-product-img.webp";
import ServiceProductIcon from "@public/icons/service-product-icon.svg";

const ServiceProductHeader = () => {
  return (
    <div className="flex justify-between gap-8">
      <Image
        src={ServiceProductImg}
        alt="Service/Product Image"
        height={150}
        width={477}
      />
      <div className="flex flex-col items-center justify-between">
        <Image
          src={ServiceProductIcon}
          alt="Flower Image"
          width={40}
          height={40}
        />
        <p className="text-[28px]">$188</p>
      </div>
    </div>
  );
};

export default ServiceProductHeader;
