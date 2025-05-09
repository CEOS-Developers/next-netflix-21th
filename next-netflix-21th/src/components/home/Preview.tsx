"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { getMoviePopular } from "@/apis/tmdb";
import { Movie } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";

import SectionTitle from "./SectionTitle";

const Preview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviePopular();
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="w-full max-w-[375px] mt-[43px]">
      <SectionTitle>Previews</SectionTitle>
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
            <SwiperSlide key={movie.id} style={{ width: "102px" }}>
              {movie.poster_path ? (
                <div className="relative w-[102px] h-[102px] rounded-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={movie.title}
                    fill
                    sizes="102px"
                    className="object-cover cursor-pointer"
                  />
                </div>
              ) : (
                <div className="caption1 text-white">이미지 없음</div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Preview;
