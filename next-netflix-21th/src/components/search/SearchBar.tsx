import { useState } from "react";

import CloseIcon from "@/public/icons/search/CloseIcon.svg";
import SearchInputIcon from "@/public/icons/search/SearchInputIcon.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  const handleClear = () => {
    setInput("");
    onSearch(""); // 검색어 초기화 시 부모도 초기화
  };

  return (
    <div className="flex h-13 w-full shrink-0 items-center bg-gray-300 px-5">
      <SearchInputIcon className="mr-[5px] h-5 w-5" />
      <form onSubmit={handleSubmit} className="flex w-full items-center">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search for a show, movie, genre, etc."
          className="text-body1 mr-6 h-[31px] w-[270px] bg-transparent px-[14px] text-white placeholder-gray-100 outline-none"
        />
        {input && (
          <button type="button" onClick={handleClear}>
            <CloseIcon className="h-[15px] w-[15px]" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
