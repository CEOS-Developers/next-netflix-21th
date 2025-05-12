import { useRef } from "react";

import { useDebounce } from "src/hooks/useDebounce";

import CloseIcon from "@/public/icons/search/CloseIcon.svg";
import SearchInputIcon from "@/public/icons/search/SearchInputIcon.svg";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  onClear: () => void;
}

const SearchBar = ({ value, onChange, onSearch, onClear }: SearchBarProps) => {
  const prevInputRef = useRef("");

  useDebounce(
    () => {
      const trimmed = value.trim();
      if (trimmed !== prevInputRef.current) {
        prevInputRef.current = trimmed;
        onSearch(trimmed);
      }
    },
    [value],
    300,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    prevInputRef.current = trimmed;
    onSearch(trimmed);
  };

  return (
    <div className="flex h-13 w-full shrink-0 items-center bg-gray-300 px-5">
      <SearchInputIcon className="mr-[5px] h-5 w-5" />
      <form onSubmit={handleSubmit} className="flex w-full items-center">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Search for a show, movie, genre, etc."
          className="text-body1 mr-6 h-[31px] w-[270px] bg-transparent px-[14px] text-white placeholder-gray-100 outline-none"
        />
        {value && (
          <button type="button" onClick={onClear} className="cursor-pointer">
            <CloseIcon className="h-[15px] w-[15px]" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
