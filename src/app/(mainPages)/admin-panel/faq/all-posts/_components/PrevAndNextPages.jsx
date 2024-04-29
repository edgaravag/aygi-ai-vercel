
const PrevAndNextPages = () => {
  return (
    <div className="flex items-center text-sm font-semibold gap-[20px]">
      <button>Previous</button>
      <div className="p-2 bg-[#68BB59] bg-opacity-20 rounded-md cursor-pointer">
        1
      </div>
      <div className="p-2 cursor-pointer">2</div>
      <div className="p-2 cursor-pointer">3</div>
      <button>Next</button>
    </div>
  );
};

export default PrevAndNextPages;
