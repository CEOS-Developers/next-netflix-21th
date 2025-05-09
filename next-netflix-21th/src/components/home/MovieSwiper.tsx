// components/home/MovieSwiper.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { IMAGE_BASE_URL } from "@/constants/tmdb";
import SectionTitle from "@/components/home/SectionTitle";

interface BaseItem {
  id: number;
  poster_path: string | null;
  title?: string;
  name?: string;
}

interface MovieSwiperProps {
  title: string;
  items: BaseItem[];
  itemWidth?: string;
  itemHeight?: string;
  shape?: "rectangle" | "circle";
}

const MovieSwiper = ({
  title,
  items,
  itemWidth = "103px",
  itemHeight = "161px",
  shape = "rectangle",
}: MovieSwiperProps) => {
  return (
    <div className="w-full max-w-[375px]">
      <SectionTitle>{title}</SectionTitle>
      <Swiper
        spaceBetween={8}
        slidesPerView="auto"
        grabCursor
        scrollbar={{ draggable: false }}
        loop={false}
        className="!px-3"
      >
        {items.map(item => {
          const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
          const displayTitle = item.title || item.name || "제목 없음";

          return (
            <SwiperSlide key={item.id} style={{ width: itemWidth }}>
              {item.poster_path ? (
                <div
                  className={`relative overflow-hidden cursor-pointer ${shape === "circle" ? "rounded-full" : "rounded-[2px]"}`}
                  style={{ width: itemWidth, height: itemHeight }}
                >
                  <Image
                    src={imageUrl}
                    alt={displayTitle}
                    fill
                    sizes={itemWidth}
                    className="object-cover pointer-events-none"
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

export default MovieSwiper;
