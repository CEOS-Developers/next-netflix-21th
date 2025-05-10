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
      try {
        const res = await getMoviesByGenre("28,35");
        setMovies(res.data.results);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
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
