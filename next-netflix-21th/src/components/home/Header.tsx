"use client";

import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import { getTrendingAllDay } from "@/apis/tmdb";
import { TrendingItem} from "@/types/tmdb";
import Image from 'next/image'; //이미지 cors에러 해결

export default function TrendingAllDay() {
  const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);

  useEffect(() => {
    const fetchTrending = async() =>{
      try{
        const response = await getTrendingAllDay();
        setTrendingData(response.data.results);
      }
     catch(error){
      console.error("트랜딩 데이터 가져오기 실패",error);
    }};
    fetchTrending();
  }, []);
  return(
    <div>
      {trendingData.map((item, index)=>{
        const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
        console.log(imageUrl)
        // title 또는 name이 있는지 확인하여 사용
        const title = "title" in item ? item.title : item.name;

        return(
          <div key={item.id}>
            <Image src={imageUrl} alt={title} width={375} height={440} priority={index<3}/>
            <div>
              #{index+1} in Korea Today
            </div>
          </div>
        );
      })}
    </div>
  );
}
