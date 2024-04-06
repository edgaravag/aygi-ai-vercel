const MyDiariesAndSavedButtons = ({ myDiaries, setMyDiaries }) => {
  return (
		<>
      <button
        className={`center w-40 px-8 py-4 font-medium tracking-widest text-sm ${
          myDiaries
            ? "text-[#68BB59] border-b-2 border-b-[#68BB59] "
            : "text-[#808080]"
        }`}
        onClick={() => setMyDiaries(!myDiaries)}
      >
        MY DIARIES
      </button>
      <button
        className={`center w-40 px-9 py-4 font-medium tracking-widest text-sm ${
          !myDiaries
            ? "text-[#68BB59] border-b-2 border-b-[#68BB59] "
            : "text-[#808080]"
        }`}
        onClick={() => setMyDiaries(!myDiaries)}
      >
        SAVED
      </button>
    </>
  );
};

export default MyDiariesAndSavedButtons;
