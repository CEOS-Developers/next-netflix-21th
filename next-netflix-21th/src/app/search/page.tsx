"use client";

import { useEffect, useState } from "react";

import { axiosInstance } from "@/apis/axios";

import SearchBar from "@/components/search/SearchBar";
import SearchCardItem from "@/components/search/SearchCardItem";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

interface SearchItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
}

const Search = () => {
  const [movieResults, setMovieResults] = useState<SearchItem[]>([]);
  const [tvResults, setTvResults] = useState<SearchItem[]>([]);
  const [query, setQuery] = useState("");

  // 검색 및 기본 인기 영화 처리
  const handleSearch = async (input: string) => {
    setQuery(input);

    if (!input) {
      try {
        const res = await axiosInstance.get("/movie/popular", {
          params: { language: "ko-KR" },
        });
        setMovieResults(res.data.results);
        console.log(res.data.results);

        setTvResults([]);
      } catch (err) {
        console.error("인기 영화 가져오기 실패", err);
      }
      return;
    }

    // 검색어 있을 때 영화 + TV 동시 검색
    try {
      const [movieRes, tvRes] = await Promise.all([
        axiosInstance.get("search/movie", {
          params: {
            query: input,
            language: "ko-KR",
            include_adult: false,
          },
        }),
        axiosInstance.get("search/tv", {
          params: {
            query: input,
            language: "ko-KR",
            include_adult: false,
          },
        }),
      ]);

      setMovieResults(movieRes.data.results);
      setTvResults(tvRes.data.results);
    } catch (error) {
      console.error("검색 실패", error);
    }
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className="flex h-screen w-full flex-col pt-[44px]">
      <SearchBar onSearch={handleSearch} />
      <span className="text-headline2 flex h-[62px] items-center pt-[21px] pb-[17px] pl-[10px] text-white">
        Top Searches
      </span>
      <div className="scrollbar-hide flex flex-col gap-[3px] overflow-y-auto pb-13">
        {[...movieResults, ...tvResults].map(item => (
          <SearchCardItem
            key={`${item.id}-${item.title ?? item.name}`}
            title={item.title ?? item.name ?? "제목 없음"}
            imageUrl={`${IMAGE_BASE_URL}w500${item.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
