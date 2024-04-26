import Image from "next/image";
import Button from "@/src/components/ui/Button";
import TomatoImg from "@public/landing/tomato.webp";
import CornImg from "@public/landing/corn.webp";
import RaspberriesImg from "@public/landing/raspberries.webp";
import ArrowRight from "@public/icons/arrowRight.svg";

const plants = [
  {
    img: TomatoImg.src,
    title: "Tomato plant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    freeDetect: true,
  },
  {
    img: CornImg.src,
    title: "Corn plant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    freeDetect: true,
  },
  {
    img: RaspberriesImg.src,
    title: "Raspberries plant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    freeDetect: false,
  },
];

const PlantExploringSection = () => {
  return (
    <section className="w-full py-16 px-8">
      <div className="flex justify-center max-w-[1440px] mx-auto">
        <div className="inline-flex flex-col gap-7 w-[1040px]">
          <h2 className="text-[#68bb59] font-semibold text-[32px] max-[1115px]:text-center">
            Explore the plant
          </h2>
          <div className="flex flex-wrap justify-around gap-x-4 gap-y-7">
            {plants.map((plant) => {
              return (
                <div
                  key={plant.title}
                  className="p-4 max-[355px]:px-[6px] border-2 border-[#68bb59] rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95"
                >
                  <div className="relative">
                    <Image src={plant.img} alt="" width={300} height={216} />
                    {plant.freeDetect && (
                      <div className="absolute bg-[#68bb59] py-[5px] px-4 right-0 top-6 rounded-md font-medium text-sm">
                        Free detect
                      </div>
                    )}
                  </div>
                  <p className="text-[#0f0701] font-semibold mt-3">
                    {plant.title}
                  </p>
                  <p className="text-[#808080] text-sm text-justify w-[300px] mt-6">
                    {plant.description}
                  </p>
                  <Button className="gap-2 font-semibold text-[#68bb59] mt-10">
                    Read more
                    <Image src={ArrowRight} alt="Arrow Right Icon" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantExploringSection;
