"use client";

import React, { useEffect, useState } from "react";
import { Movie } from "@/types/tmdb";
import { getKoreaMovie } from "@/apis/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";

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
    <div className="text-[20.92px]">
      Korea Movie
      <div className="overflow-x-auto whitespace-nowrap px-4">
        <div className="flex gap-8">
          {movies.map(movie => {
            const imageUrl = `${IMAGE_BASE_URL}original${movie.poster_path}`;

            return (
              <div key={movie.id} className="flex-shrink-0">
                {movie.poster_path ? (
                  <div className="relative w-[120px] h-[160px]">
                    <Image
                      src={imageUrl}
                      alt={movie.title}
                      fill
                      sizes="120px"
                    />
                  </div>
                ) : (
                  <div className="text-white">이미지 없음</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default KoreaMovie;
