"use client";

import React, { useEffect, useState } from "react";
import { getMoviesByGenre } from "@/apis/tmdb";

import MovieSwiper from "@/components/home/MovieSwiper";
import SkeletonCard from "@/components/skeleton/SkeletonCard";

import { Movie } from "@/types/tmdb";

const GenrePreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await getMoviesByGenre("28,35");
      setMovies(res.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <SkeletonCard
        title="Movie Action & Comedy"
        itemWidth="103px"
        itemHeight="161px"
      />
    );
  }

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
