"use client";

import { useEffect, useState } from "react";
import { getMoviesByCompany, getTVByNetwork } from "@/apis/tmdb";
import { Movie, TV } from "@/types/tmdb";
import MovieSwiper from "./MovieSwiper";

const NETFLIX_ID = 213;

const NetflixOriginal = () => {
  const [items, setItems] = useState<(Movie | TV)[]>([]);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      try {
        const movieRes = await getMoviesByCompany(NETFLIX_ID);
        const tvRes = await getTVByNetwork(NETFLIX_ID);

        const movieResults = movieRes.data.results;
        const tvResults = tvRes.data.results;

        const combinedResults = [...movieResults, ...tvResults];
        const shuffledResults = combinedResults.sort(() => Math.random() - 0.5);
        setItems(shuffledResults);
      } catch (error) {
        console.error("넷플릭스 오리지널 데이터 로딩 실패:", error);
      }
    };

    fetchNetflixOriginals();
  }, []);

  return (
    <MovieSwiper
      title="Netflix Originals"
      items={items}
      itemWidth="154px"
      itemHeight="251px"
    />
  );
};

export default NetflixOriginal;
