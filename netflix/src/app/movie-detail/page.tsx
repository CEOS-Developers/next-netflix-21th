"use client";

import Image from "next/image";
import { useMovieDetails } from "@/hooks/useTMDB";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
const MovieDetailContent = () => {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");

  const { data: movie, isLoading, error } = useMovieDetails(Number(movieId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!movie) return <div>Movie not found</div>;

  const imageUrl = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="flex h-full w-full flex-col items-center bg-black">
      {/* 상단 프리뷰 사진 */}
      <section className="relative h-[26rem] w-full">
        <Image
          src={imageUrl}
          fill
          alt={movie.title}
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 h-full w-full [background:linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.00)_87.26%,#000_100%)]" />
      </section>
      <section className="flex w-full flex-col items-center pt-4">
        {/* 플레이 버튼 */}
        <button
          type="button"
          className="h-[2.8125rem] w-[18.9375rem] shrink-0 cursor-not-allowed space-x-4 rounded-[0.35156rem] bg-[#C4C4C4] text-[1.27888rem] leading-[146.61%] font-semibold tracking-[-0.00381rem] text-black"
        >
          <span>►</span>
          <span>Play</span>
        </button>
        <article className="m-8 flex flex-col items-center space-y-6 text-white">
          <h1 className="h1 w-full">{movie.title}</h1>
          <p className="b2 w-full">{movie.overview}</p>
          <div className="flex gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-gray-800 px-3 py-1 text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

const MovieDetail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MovieDetailContent />
    </Suspense>
  );
};

export default MovieDetail;
