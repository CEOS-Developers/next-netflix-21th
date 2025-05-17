import SearchIcon from "@/assets/images/SearchIcon.svg";
import ExitIcon from "@/assets/images/ExitIcon.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "@/hooks/useDebounce";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(searchQuery, 300);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  }, []);

  const handleClear = useCallback(() => {
    setSearchQuery("");
    router.push("/search");
  }, [router]);

  useEffect(() => {
    if (debouncedQuery) {
      router.push(`/search?q=${encodeURIComponent(debouncedQuery)}`);
    } else {
      router.push("/search");
    }
  }, [debouncedQuery, router]);

  return (
    <div className="flex h-13 w-full max-w-md shrink-0 items-center gap-1 bg-[#424242] px-5 py-2">
      <SearchIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
      <input
        type="text"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="flex-1 overflow-hidden bg-transparent text-white placeholder-zinc-500 focus:outline-none"
        onChange={handleSearch}
        value={searchQuery}
        aria-label="Search movies and shows"
      />
      {searchQuery && (
        <ExitIcon
          className="h-5 w-5 flex-shrink-0 cursor-pointer transition-opacity hover:opacity-80"
          onClick={handleClear}
          aria-label="Clear search"
        />
      )}
    </div>
  );
};

export default SearchInput;
