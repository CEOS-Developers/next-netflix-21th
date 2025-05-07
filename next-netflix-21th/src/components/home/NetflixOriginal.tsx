"use client";
import { useEffect, useState } from "react";
import { Movie, TV } from "@/types/tmdb";
import { getMoviesByCompany, getTVByNetwork } from "@/apis/tmdb";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";

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
        <div className="overflow-x-auto whitespace-nowrap px-4 mt-4">
          <div className="flex gap-4">
            {randomItems.map(item => {
              const imageUrl = `${IMAGE_BASE_URL}original${item.poster_path}`;
              const title = "title" in item ? item.title : item.name;

              return (
                <div key={item.id} className="flex-shrink-0">
                  {item.poster_path ? (
                    <div className="relative w-[120px] h-[160px] rounded overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={title} // 영화와 TV의 이름을 다르게 처리
                        fill
                        sizes="120px"
                        className="object-cover rounded"
                      />
                    </div>
                  ) : (
                    <div className="w-[120px] h-[160px] bg-gray-700 flex items-center justify-center text-sm text-white">
                      이미지 없음
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixOriginal;
