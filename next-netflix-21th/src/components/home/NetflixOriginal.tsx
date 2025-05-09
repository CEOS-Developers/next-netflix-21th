"use client";

import { useEffect, useState } from "react";
import { getMoviesByCompany, getTVByNetwork } from "@/apis/tmdb";
import { Movie, TV } from "@/types/tmdb";
import MovieSwiper from "@/components/home/MovieSwiper";
import SkeletonCard from "@/components/skeleton/SkeletonCard";

const NETFLIX_ID = 213;

const NetflixOriginal = () => {
  const [items, setItems] = useState<(Movie | TV)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      try {
        const movieRes = await getMoviesByCompany(NETFLIX_ID);
        const tvRes = await getTVByNetwork(NETFLIX_ID);

        const movieResults = movieRes.data.results;
        const tvResults = tvRes.data.results;

        const combinedResults = [...movieResults, ...tvResults];
        const shuffledResults = combinedResults.sort(() => Math.random() - 0.5);
        setItems(shuffledResults);
      } catch (error) {
        console.error("넷플릭스 오리지널 데이터 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNetflixOriginals();
  }, []);

  if (loading) {
    return (
      <div>
        <div className="headline3 text-white mb-[14px] ml-4">
          Netflix Originals
        </div>
        <SkeletonCard itemWidth="154px" itemHeight="251px" />
      </div>
    );
  }

  return (
    <MovieSwiper
      title="Netflix Originals"
      items={items}
      itemWidth="154px"
      itemHeight="251px"
    />
  );
};

export default NetflixOriginal;
