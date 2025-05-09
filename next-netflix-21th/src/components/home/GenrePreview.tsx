"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { getMoviesByGenre } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";

import SectionTitle from "./SectionTitle";

const GenrePreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesByGenre("28,35").then(res => {
      //28:액션, 35: 코미디
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="text-[20.92px]">
      <SectionTitle>Movie Action & Comedy</SectionTitle>
      <Swiper
        spaceBetween={8}
        slidesPerView={"auto"}
        grabCursor={true}
        scrollbar={{ draggable: false }}
        loop={false}
        className="!px-3"
      >
        {movies.map(movie => {
          const imageUrl = `${IMAGE_BASE_URL}original${movie.poster_path}`;

          return (
            <SwiperSlide key={movie.id} style={{ width: "103px" }}>
              {movie.poster_path ? (
                <div className="relative w-[103px] h-[161px] rounded-[2px] overflow-hidden cursor-pointer">
                  <Image src={imageUrl} alt={movie.title} fill sizes="103px" />
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
