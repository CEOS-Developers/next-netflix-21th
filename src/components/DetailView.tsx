// components/DetailView.tsx
"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Play from "@/assets/play.svg";

export default function DetailView() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR`;

      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    };

    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center text-white overflow-auto scrollbar-hide h-[calc(100vh-100px)] box-border">
      <div
        className="w-full min-h-[415px] bg-cover bg-top box-border"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0.45) 0%,rgba(0, 0, 0, 0) 50%, #000000 100%), url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      />
      <button
        className="flex flex-row items-center bg-neutral-700 p-2 rounded-md justify-center mx-[36px] gap-3"
        style={{ backgroundColor: "#C4C4C4" }}
      >
        <Play />
        <p style={{ color: "black", fontWeight: "600" }}>Play</p>
      </button>
      <p className="m-[32px] text-[27px] font-bold">Preview</p>
      <p className="mx-[32px]">{movie.overview}</p>
    </div>
  );
}
