"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { getKoreaMovie } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";

import SectionTitle from "./SectionTitle";

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
      <SectionTitle>Korea Movie</SectionTitle>
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

export default KoreaMovie;
