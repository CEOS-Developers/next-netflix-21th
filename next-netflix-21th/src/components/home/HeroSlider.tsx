"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";

import { getTrendingAllDay } from "@/apis/tmdb";
import { TrendingItem } from "@/types/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";

import Top10Icon from "@/public/icons/home/Top10Icon.svg";
import BannerOption from "../layout/BannerOption";

const HeroSlider = () => {
  const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await getTrendingAllDay();
        setTrendingData(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("트랜딩 데이터 가져오기 실패", error);
      }
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); // 항상 오른쪽으로만 넘어감
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[415px] ">
      <Swiper
        spaceBetween={8}
        slidesPerView={1}
        loop={trendingData.length > 2}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {trendingData.map((item, index) => {
          const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
          const title = "title" in item ? item.title : item.name;

          return (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="375px"
                  priority={index < 3}
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/4 z-10 bg-gradient-to-t from-black to-transparent" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center gap-[5px]">
        <Top10Icon className="w-[15px] h-[15px]" />
        <span className="subhead3 text-white h-5">
          #{activeIndex + 1} in Korea Today
        </span>
      </div>
      <div>
        <BannerOption/>
      </div>
    </div>
  );
};

export default HeroSlider;
