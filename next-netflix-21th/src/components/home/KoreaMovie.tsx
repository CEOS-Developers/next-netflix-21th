"use client";

import React, { useEffect, useState } from "react";

import { getKoreaMovie } from "@/apis/tmdb";

import MovieSwiper from "@/components/home/MovieSwiper";
import SkeletonCard from "@/components/skeleton/SkeletonCard";

import { Movie } from "@/types/tmdb";

const KoreaMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getKoreaMovie();
        setMovies(response.data.results);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    <SkeletonCard title="Korea Movie" itemWidth="103px" itemHeight="161px" />;
  }

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
