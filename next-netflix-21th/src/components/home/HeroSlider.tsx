"use client";

import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import { getTrendingAllDay } from "@/apis/tmdb";
import { TrendingItem } from "@/types/tmdb";
import Image from "next/image";
import Top10Icon from "@/public/icons/home/Top10Icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";

const HeroSlider= () =>{
  const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const response = await getTrendingAllDay();
        setTrendingData(response.data.results);
      } catch (error) {
        console.error("트랜딩 데이터 가져오기 실패", error);
        setError("Failed to load trending data.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: true, // Pause on user interaction
      }}
      modules={[Autoplay]}
    >
      {trendingData.slice(0, 10).map((item, index) => {
        const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
        const title = "title" in item ? item.title : item.name;

        return (
          <SwiperSlide key={item.id} role="listitem">
            <div className="relative w-full h-[440px]">
              <Image
                src={imageUrl}
                alt={title}
                fill
                priority={index < 3}
                quality={75}
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Top10Icon className="w-16 h-16 " />
              <span>#{index + 1} in Korea Today</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default HeroSlider;