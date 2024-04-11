import ShowNewDiary from "./_components/ShowNewDiary";
import SingleDiary from "./_components/SingleDiary";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import DiaryImg from "@public/plants/diaryImg.webp";
import AddNewBusiness from "./_components/AddNewBusiness";

const diaries = [
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: false,
  },
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: false,
  },
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
  {
    diaryName: "Diary Name",
    creationDate: "06 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
];

const MyGardenComponent = () => {
  return (
    <>
      <h2 className="text-xl font-semibold">My Garden</h2>
      <AddNewBusiness />
      <ShowNewDiary />
      <div className="center flex-wrap mx-auto gap-4 max-[2166px]:w-[704px] max-[1440px]:w-auto">
        {diaries.map((diary, index) => {
          return (
            <SingleDiary diary={diary} key={index} />
          );
        })}
      </div>
      <PrevAndNextPages />
    </>
  );
};

export default MyGardenComponent;
