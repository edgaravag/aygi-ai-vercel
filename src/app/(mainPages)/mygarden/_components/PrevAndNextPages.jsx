const PrevAndNextPages = ({
  diariesPerPage,
  totalDiaries,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDiaries / diariesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-end mx-auto w-[704px] mt-9 text-sm font-semibold gap-[20px]">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <div
          key={number}
          onClick={() => paginate(number)}
          className={`p-2 cursor-pointer ${
            currentPage === number
              ? "bg-[#68BB59] bg-opacity-20 rounded-md"
              : ""
          }`}
        >
          {number}
        </div>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

export default PrevAndNextPages;
