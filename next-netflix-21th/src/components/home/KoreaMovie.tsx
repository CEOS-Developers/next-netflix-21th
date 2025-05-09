"use client";

import React, { useEffect, useState } from "react";
import { getKoreaMovie } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import MovieSwiper from "./MovieSwiper";

const KoreaMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getKoreaMovie();
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieSwiper
      title="Korea Movie"
      items={movies}
      itemWidth="103px"
      itemHeight="161px"
    />
  );
};

export default KoreaMovie;
