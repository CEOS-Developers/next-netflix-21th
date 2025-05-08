"use client";

import React, { useEffect, useState } from "react";
import { getMoviesByGenre } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const GenrePreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesByGenre("28,35").then(res => {
      //28:액션, 35: 코미디
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="text-[20.92px] p-4">
      <div className="mb-4">Movie Action & Comedy</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        grabCursor={true}
        scrollbar={{ draggable: false }}
        loop={true}
        className="gap-8" // gap-8을 Swiper에 추가
      >
        {movies.map(movie => {
          const imageUrl = `${IMAGE_BASE_URL}original${movie.poster_path}`;

          return (
            <SwiperSlide key={movie.id} style={{ width: "120px" }}>
              {movie.poster_path ? (
                <div className="relative w-[120px] h-[160px]">
                  <Image src={imageUrl} alt={movie.title} fill sizes="120px" />
                </div>
              ) : (
                <div className="text-white">이미지 없음</div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GenrePreview;
