"use client";

import { useState, useEffect } from "react";
import { Movie } from "@/types/tmdb";
import { getMoviePopular } from "@/apis/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Preview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviePopular();
        console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="text-[20.92px] p-4">
      <div className="mb-4">Popular Movie</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        grabCursor={true}
        scrollbar={{ draggable: false }}
        loop={true}
      >
        {movies.map(movie => {
          const imageUrl = `${IMAGE_BASE_URL}original${movie.poster_path}`;
          return (
            <SwiperSlide key={movie.id} style={{ width: "100px" }}>
              {movie.poster_path ? (
                <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={movie.title}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
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

export default Preview;
