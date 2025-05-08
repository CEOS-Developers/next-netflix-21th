"use client";

import React, { useEffect, useState } from "react";
import { getMoviesByGenre } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";

const GenrePreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesByGenre("28,35").then(res => { //28:액션, 35: 코미디
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="text-[20.92px]">
      Movie Action & Comedy
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

export default GenrePreview;
