"use client";
import { useEffect, useState } from "react";
import { Movie, TV } from "@/types/tmdb";
import { getMoviesByCompany, getTVByNetwork } from "@/apis/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NETFLIX_ID = 213;

const NetflixOriginal = () => {
  const [randomItems, setRandomItems] = useState<(Movie | TV)[]>([]);

  useEffect(() => {
    Promise.all([
      getMoviesByCompany(NETFLIX_ID),
      getTVByNetwork(NETFLIX_ID),
    ]).then(([movieRes, tvRes]) => {
      const movieResults = movieRes.data.results;
      const tvResults = tvRes.data.results;

      const combinedResults = [...movieResults, ...tvResults];

      // 배열을 랜덤하게 섞음
      const shuffledResults = combinedResults.sort(() => Math.random() - 0.5);
      // 랜덤하게 섞은 배열을 상태에 저장
      setRandomItems(shuffledResults);
    });
  }, []);

  return (
    <div>
      <div className="text-[20.92px] text-white">
        Netflix Originals
        <Swiper
          spaceBetween={10} // 슬라이드 간 간격
          slidesPerView={"auto"} // 여러 개의 슬라이드가 보이게
          grabCursor={true}
          scrollbar={{ draggable: false }}
          loop={true}
          className="gap-8"
        >
          {randomItems.map(item => {
            const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
            const title = "title" in item ? item.title : item.name;

            return (
              <SwiperSlide key={item.id} style={{ width: "120px" }}>
                <div className="relative w-[120px] h-[160px]">
                  {item.poster_path ? (
                    <Image
                      src={imageUrl}
                      alt={title} // 영화와 TV의 이름을 다르게 처리
                      fill
                      sizes="120px"
                    />
                  ) : (
                    <div className="text-white">
                      이미지 없음
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NetflixOriginal;
