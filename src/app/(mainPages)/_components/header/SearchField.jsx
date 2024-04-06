import Image from "next/image";
import SearchIcon from "@public/icons/search.webp";

const SearchField = () => {
  return (
    <button className="center gap-3">
      <Image
        src={SearchIcon}
        alt=""
        priority
        width={18}
        height={18}
        style={{ width: "auto", height: "auto" }}
      />
      <input
        type="search"
        className="h-8 rounded-md px-3 outline-none"
        placeholder="Search"
      />
    </button>
  );
};

export default SearchField;
