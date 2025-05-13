"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

import { getTrendingAllDay } from "@/apis/tmdb";

import BannerOption from "@/components/home/BannerOption";
import BannerSkeleton from "@/components/skeleton/BannerSkeleton";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

import { TrendingItem } from "@/types/tmdb";

import Top10Icon from "@/public/icons/home/Top10Icon.svg";

const HeroSlider = () => {
  const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await getTrendingAllDay();
        setTrendingData(response.results.slice(0, 10));
      } finally {
        setLoading(false);
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

  if (loading) {
    return <BannerSkeleton />;
  }
  return (
    <div className="relative h-[415px] w-full">
      <Swiper
        spaceBetween={8}
        slidesPerView={1}
        loop={trendingData.length > 2}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        className="h-full w-full"
      >
        {trendingData.map((item, index) => {
          const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
          const title = "title" in item ? item.title : item.name;

          return (
            <SwiperSlide key={item.id}>
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="375px"
                  priority={index < 3}
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 z-10 h-1/4 w-full bg-gradient-to-t from-black to-transparent" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-[-2px] left-1/2 z-20 flex -translate-x-1/2 transform items-center justify-center gap-[5px]">
        <Top10Icon className="h-[15px] w-[15px]" />
        <span className="text-subhead3 h-5 text-white">
          #{activeIndex + 1} in Korea Today
        </span>
      </div>

      <BannerOption />
    </div>
  );
};

export default HeroSlider;
