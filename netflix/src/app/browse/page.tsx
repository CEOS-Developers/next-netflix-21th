"use client";

import Image from "next/image";
import NetflixIcon from "@/assets/images/NetflixIcon.svg";
import PlusIcon from "@/assets/images/PlusIcon.svg";
import PlayMainIcon from "@/assets/images/PlayMainIcon.svg";
import InfoIcon from "@/assets/images/InfoIcon.svg";
import Top10 from "@/assets/images/Top10.svg";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";
import {
  usePopularMovies,
  useTopRatedMovies,
  useTopRatedTvSeries,
  useUpcomingMovies,
} from "@/hooks/useTMDB";

import { goToMovieDetail, goToTvDetail } from "@/utils/routeFunction";
import { useRouter } from "next/navigation";

const Home = () => {
  const HeaderList = [
    {
      key: 0,
      name: "Netflix",
    },
    {
      key: 1,
      name: "TV Shows",
    },
    {
      key: 2,
      name: "Movies",
    },
    {
      key: 3,
      name: "My List",
    },
  ];

  const [currentTopIndex, setCurrentTopIndex] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const {
    data: topRatedMovies,
    isLoading: isTopRatedLoading,
    error: top10Error,
  } = useTopRatedMovies();
  const { data: topRatedTvSeries, isLoading: isTopRatedTvSeriesLoading } =
    useTopRatedTvSeries();
  const { data: upcomingMovies, isLoading: isUpcomingMoviesLoading } =
    useUpcomingMovies();
  const { data: popularMovies, isLoading: isPopularMoviesLoading } =
    usePopularMovies();

  useEffect(() => {
    if (!topRatedMovies) return;

    const interval = setInterval(() => {
      // 먼저 fadeOut 시작
      setFadeOut(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [topRatedMovies]);

  useEffect(() => {
    if (!fadeOut) return;

    const timeout = setTimeout(() => {
      // 이미지 변경 후 fadeIn
      setCurrentTopIndex((prev) => (prev + 1) % 10);
      setFadeOut(false);
    }, 1000); // 페이드 아웃 완료 후 이미지 전환

    return () => clearTimeout(timeout);
  }, [fadeOut]);

  //영화 상세 페이지로 이동
  const router = useRouter();
  const onMovieClick = (movieId: number) => {
    goToMovieDetail(router, movieId);
  };
  const onTvClick = (tvId: number) => {
    goToTvDetail(router, tvId);
  };

  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto bg-black">
      <div className="relative flex h-[26rem] w-full flex-col items-center justify-between py-2">
        {isTopRatedLoading ? (
          <div className="animate-skeleton absolute inset-0" />
        ) : top10Error ? (
          <div className="absolute inset-0">Error: {top10Error.message}</div>
        ) : (
          <Image
            src={`https://image.tmdb.org/t/p/original${topRatedMovies?.results[currentTopIndex].poster_path}`}
            alt={
              topRatedMovies?.results[currentTopIndex].title ||
              "Top Rated Movie Poster"
            }
            fill
            sizes="100"
            priority={currentTopIndex === 0}
            className={cn(
              "absolute inset-0 object-cover duration-1000",
              fadeOut ? "opacity-0" : "opacity-100",
            )}
          />
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-transparent to-black" />
        <header className="z-20 flex w-full justify-between px-4 py-6">
          {HeaderList.map((item) => (
            <button
              type="button"
              className="flex cursor-pointer items-center text-[1.125rem] leading-[1.875rem]"
              key={item.key}
            >
              {item.name === "Netflix" ? <NetflixIcon /> : item.name}
            </button>
          ))}
        </header>
        <div className="z-20 flex items-center gap-2">
          <Top10 />
          <h1 className="text-[.875rem] leading-5 font-bold">
            #{currentTopIndex + 1} in US Today
          </h1>
        </div>
      </div>

      {/* Play Bar */}
      <div className="flex w-full justify-between px-12 py-4">
        <button
          type="button"
          className="flex w-12 cursor-pointer flex-col items-center justify-between"
        >
          <PlusIcon />
          <span className="text-[.875rem] leading-[1.25rem]">My List</span>
        </button>
        <button
          type="button"
          className="flex shrink-0 cursor-pointer items-center gap-[1.125rem] rounded-[.375rem] bg-[#C3C4C4] py-2 pr-[.625rem] pl-5 hover:bg-[#8a8a8a]"
        >
          <PlayMainIcon />
          <span className="text-[1.25rem] leading-[1.875rem] font-semibold text-black">
            Play
          </span>
        </button>
        <button
          type="button"
          className="flex w-12 cursor-pointer flex-col items-center justify-between"
        >
          <InfoIcon />
          <span className="text-[.875rem] leading-[1.25rem]">Info</span>
        </button>
      </div>

      {/* Movie List */}
      <main className="flex flex-col gap-5 pt-11 pb-8">
        <section className="flex flex-col gap-4 px-4">
          <h2 className="text-[1.625rem] leading-5 font-bold">Previews</h2>
          <ul className="no-scrollbar flex gap-2 overflow-x-scroll">
            {isTopRatedLoading
              ? [...Array(6)].map((_, index) => (
                  <li
                    key={index}
                    className="animate-skeleton h-25 w-25 shrink-0 overflow-hidden rounded-full"
                  />
                ))
              : topRatedMovies?.results.map((movie) => (
                  <li
                    key={movie.id}
                    className="h-25 w-25 shrink-0 overflow-hidden rounded-full"
                    onClick={() => onMovieClick(movie.id)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title || "Top Rated Movie poster"}
                      width={100}
                      height={100}
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </li>
                ))}
          </ul>
        </section>
        <section className="flex flex-col gap-4 px-4">
          <h2 className="h2">Upcoming Movies</h2>
          <ul className="no-scrollbar flex gap-2 overflow-x-scroll">
            {isUpcomingMoviesLoading
              ? [...Array(6)].map((_, index) => (
                  <li
                    key={index}
                    className="animate-skeleton h-44 w-25 shrink-0 overflow-hidden rounded-[.125rem]"
                  />
                ))
              : upcomingMovies?.results.map((movie) => (
                  <li
                    key={movie.id}
                    className="h-44 w-25 shrink-0 overflow-hidden rounded-[.125rem]"
                    onClick={() => onMovieClick(movie.id)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title || "Upcoming Movies Poster"}
                      width="60"
                      height="80"
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </li>
                ))}
          </ul>
        </section>
        <section className="flex flex-col gap-4 px-4">
          <h2 className="h2">Top Rated TV Series</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-scroll">
            {isTopRatedTvSeriesLoading
              ? [...Array(5)].map((_, index) => (
                  <li
                    key={index}
                    className="animate-skeleton h-63 w-39 shrink-0 overflow-hidden rounded-[.125rem]"
                  />
                ))
              : topRatedTvSeries?.results.map((tv) => (
                  <li
                    key={tv.id}
                    className="h-63 w-39 shrink-0 overflow-hidden rounded-[.125rem]"
                    onClick={() => onTvClick(tv.id)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      alt={tv.title || "Top rated TV Series Poster"}
                      width={100}
                      height={100}
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </li>
                ))}
          </div>
        </section>
        <section className="flex flex-col gap-4 px-4">
          <h2 className="h2">Popular Movies</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-scroll">
            {isPopularMoviesLoading
              ? [...Array(6)].map((_, index) => (
                  <li
                    key={index}
                    className="animate-skeleton h-44 w-25 shrink-0 overflow-hidden rounded-[.125rem]"
                  />
                ))
              : popularMovies?.results.map((movie) => (
                  <li
                    key={movie.id}
                    className="relative h-44 w-25 shrink-0 overflow-hidden rounded-[.125rem]"
                    onClick={() => onMovieClick(movie.id)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title || "Popular Movie Poster"}
                      width="60"
                      height="80"
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </li>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
