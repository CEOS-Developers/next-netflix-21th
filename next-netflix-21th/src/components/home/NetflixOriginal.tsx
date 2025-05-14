"use client";

import { useEffect, useState } from "react";

import { getMoviesByCompany, getTVByNetwork } from "@/apis/tmdb";

import MovieSwiper from "@/components/home/MovieSwiper";
import SkeletonCard from "@/components/skeleton/SkeletonCard";

import { Movie, TV } from "@/types/tmdb";

const NETFLIX_ID = 213;

const NetflixOriginal = () => {
  const [items, setItems] = useState<(Movie | TV)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
        const movieRes = await getMoviesByCompany(NETFLIX_ID);
        const tvRes = await getTVByNetwork(NETFLIX_ID);

        const movieResults = movieRes.results;
        const tvResults = tvRes.results;

        const combinedResults = [...movieResults, ...tvResults];
        const shuffledResults = combinedResults.sort(() => Math.random() - 0.5);
        setItems(shuffledResults);
        setLoading(false);
    };

    fetchNetflixOriginals();
  }, []);

  if (loading) {
    return (
      <SkeletonCard
        title="Netflix Originals"
        itemWidth="154px"
        itemHeight="251px"
      />
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
