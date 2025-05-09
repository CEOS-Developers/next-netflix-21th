"use client";

import { useState, useEffect } from "react";
import { getMoviePopular } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import MovieSwiper from "./MovieSwiper";

const Preview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviePopular();
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <MovieSwiper
      title="Previews"
      items={movies}
      itemWidth="102px"
      itemHeight="102px"
      shape="circle"
    />
  );
};

export default Preview;
