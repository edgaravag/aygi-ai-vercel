import Image from "next/image";
import Button from "@/src/components/ui/Button";
import BusinessHeaderImg from "@public/plants/businessHeader.webp";
import BusinessLogoImg from "@public/icons/businessLogo.webp";
import UploadImageIcon from "@public/icons/uploadImageBlackIcon.svg";

const BusinessLogo = () => {
  return (
    <div className="relative">
      <Image
        src={BusinessHeaderImg}
        alt="Business Header Image"
        width={571}
        height={146}
        priority
      />
      <div className="absolute top-[93px] left-6">
        <Image
          src={BusinessLogoImg}
          alt="Business Logo Image"
          width={106}
          height={106}
        />
      </div>
      <div className="absolute top-[94px] right-6">
        <Button className="bg-white opacity-80 gap-1.5 px-2 py-px text-xs font-medium rounded-sm">
          <Image
            src={UploadImageIcon}
            alt="Upload Image Icon"
            width={20}
            height={20}
          />
          Upload Photo
        </Button>
      </div>
    </div>
  );
};

export default BusinessLogo;
