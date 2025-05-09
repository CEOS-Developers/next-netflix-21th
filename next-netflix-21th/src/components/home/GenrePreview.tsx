"use client";

import React, { useEffect, useState } from "react";
import { getMoviesByGenre } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import MovieSwiper from "./MovieSwiper";

const GenrePreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesByGenre("28,35").then(res => {
      //28:액션, 35: 코미디
      setMovies(res.data.results);
    });
  }, []);

  return (
    <MovieSwiper
      title="Movie Action & Comedy"
      items={movies}
      itemWidth="103px"
      itemHeight="161px"
    />
  );
};

export default GenrePreview;
