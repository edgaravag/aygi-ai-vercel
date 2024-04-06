import RegisterButtons from "./_components/RegisterButtons";

const Header = () => {
  return (
    <>
      <header className="fixed scroll-auto z-10 h-auto py-[29px] flex justify-around items-center flex-wrap bg-black w-full gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-14 sm:justify-between sm:px-10 max-[412px]:pb-4 max-[412px]:pt-3">
        <div>
          <p className="text-white text-2xl font-bold font-aygiFont cursor-pointer">
            AYGI AI
          </p>
        </div>
        <div className="flex gap-4">
          <RegisterButtons />
        </div>
      </header>
    </>
  );
};

export default Header;
