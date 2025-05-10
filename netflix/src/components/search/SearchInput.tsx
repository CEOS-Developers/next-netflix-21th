import SearchIcon from "@/assets/images/SearchIcon.svg";
import ExitIcon from "@/assets/images/ExitIcon.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleClear = () => {
    setSearchQuery("");
    router.push("/search");
  };

  return (
    <div className="flex h-13 w-full max-w-md items-center gap-1 bg-[#424242] px-5 py-2">
      <SearchIcon className="h-5 w-5 flex-shrink-0 cursor-pointer" />
      <input
        type="text"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="flex-1 overflow-hidden bg-transparent text-white placeholder-zinc-500 focus:outline-none"
        onChange={handleSearch}
        value={searchQuery}
      />
      <ExitIcon
        className="h-5 w-5 flex-shrink-0 cursor-pointer"
        onClick={handleClear}
      />
    </div>
  );
};
export default SearchInput;
