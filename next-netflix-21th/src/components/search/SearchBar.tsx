import CloseIcon from "@/public/icons/search/CloseIcon.svg";
import SearchInputIcon from "@/public/icons/search/SearchInputIcon.svg";

const SearchBar = () => {
  return (
    <div className="flex h-13 w-full items-center bg-gray-300 px-5">
      <SearchInputIcon className="mr-[5px] h-5 w-5" />
      <input
        placeholder="Search for a show, movie, genre, e.t.c."
        className="ouline-none text-body1 mr-6 h-[31px] w-[270px] px-[14px] text-white placeholder-gray-100"
      />
      <CloseIcon className="h-[15px] w-[15px]" />
    </div>
  );
};

export default SearchBar;
