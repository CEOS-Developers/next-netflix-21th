"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import Link from "next/link";
import PlayIcon from "@/assets/playicon.svg";
import Search from "@/assets/search.svg";
import Close from "@/assets/Vector.svg";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchData = async () => {
        const url = query
          ? `https://api.themoviedb.org/3/search/movie?query=${query}`
          : `https://api.themoviedb.org/3/movie/popular`;

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            Accept: "application/json",
          },
        });
        const data = await res.json();
        setResults(data.results || []);
      };

      fetchData();
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <div className="flex w-full h-[52px] bg-neutral-700 text-white items-center p-3 px-3">
        <Search width={28} height={28} />
        <input
          className="w-full h-[52px] bg-neutral-700 text-white p-2"
          placeholder="Search for a show, movie, genre, e.t.c."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Close
          onClick={() => setQuery("")}
          className="min-w-[15px] min-h-[15px]"
        />
      </div>
      <div className="p-3 font-bold text-[26px]">Top Search</div>
      <ul className="flex flex-col overflow-auto scrollbar-hide h-[calc(100vh-175px)] gap-[3px]">
        {results.map((movie) => (
          <li
            key={movie.id}
            className="flex flex-row items-center bg-neutral-700 "
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              width={146}
            />
            <div className="flex flex-row items-center justify-between w-full p-3 font-normal">
              <p className="font-normal">{movie.title}</p>

              <Link href={`/movie/${movie.id}`} className="p">
                <PlayIcon width={28} height={28} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
