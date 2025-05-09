"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { getMoviesByCompany, getTVByNetwork } from "@/apis/tmdb";
import { Movie, TV } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";

import SectionTitle from "./SectionTitle";

const NETFLIX_ID = 213;

const NetflixOriginal = () => {
  const [randomItems, setRandomItems] = useState<(Movie | TV)[]>([]);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      try {
        const movieRes = await getMoviesByCompany(NETFLIX_ID);
        const tvRes = await getTVByNetwork(NETFLIX_ID);

        const movieResults = movieRes.data.results;
        const tvResults = tvRes.data.results;

        const combinedResults = [...movieResults, ...tvResults];
        const shuffledResults = combinedResults.sort(() => Math.random() - 0.5);
        setRandomItems(shuffledResults);
      } catch (error) {
        console.error("넷플릭스 오리지널 데이터 로딩 실패:", error);
      }
    };

    fetchNetflixOriginals();
  }, []);

  return (
    <div>
      <div className="text-[20.92px] text-white px-3">
        <SectionTitle>Netflix Originals</SectionTitle>
        <Swiper
          spaceBetween={8}
          slidesPerView={"auto"}
          grabCursor={true}
          scrollbar={{ draggable: false }}
          loop={false}
          className="gap-8"
        >
          {randomItems.map(item => {
            const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
            const title = "title" in item ? item.title : item.name;

            return (
              <SwiperSlide key={item.id} style={{ width: "154px" }}>
                <div className="relative w-[154px] h-[251px] rounded-[2px] overflow-hidden cursor-pointer">
                  {item.poster_path ? (
                    <Image src={imageUrl} alt={title} fill sizes="154px" />
                  ) : (
                    <div className="text-white">이미지 없음</div>
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
