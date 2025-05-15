"use client";

import Image from "next/image";

import React from "react";

import clsx from "clsx";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "@/components/home/SectionTitle";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

import { TrendingItem } from "@/types/tmdb";
import Link from "next/link";

interface MovieSwiperProps {
  title: string;
  items: TrendingItem[];
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
        {items.map((item, index) => {
          const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
          const displayTitle =
            "title" in item
              ? item.title || "NO TITLE"
              : item.name || "NO TITLE";

          const mediaType = "title" in item ? "movie" : "tv"
          return (
            <SwiperSlide key={item.id} style={{ width: itemWidth }}>
              <Link href={`/detail/${mediaType}/${item.id}`}>
                {item.poster_path ? (
                  <div
                    className={clsx(
                      "relative cursor-pointer overflow-hidden",
                      shape === "circle" ? "rounded-full" : "rounded-[2px]",
                    )}
                    style={{ width: itemWidth, height: itemHeight }}
                  >
                      <Image
                        src={imageUrl}
                        alt={displayTitle}
                        fill
                        sizes={itemWidth}
                        className="pointer-events-none object-cover"
                        priority={index < 3}
                      />

                  </div>
                ) : (
                  <div className="text-caption1 text-white">이미지 없음</div>
                )}
              </Link>

            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieSwiper;
