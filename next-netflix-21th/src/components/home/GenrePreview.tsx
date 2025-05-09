"use client";

import React, { useEffect, useState } from "react";
import { getMoviesByGenre } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import MovieSwiper from "@/components/home/MovieSwiper";
import SkeletonCard from "@/components/skeleton/SkeletonCard";

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
      <div>
        <div className="headline3 text-white mb-[14px] ml-4">
          Movie Action & Comedy
        </div>
        <SkeletonCard itemWidth="103px" itemHeight="161px" />
      </div>
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
