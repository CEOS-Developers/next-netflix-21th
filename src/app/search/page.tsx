"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <input
        className="border w-full rounded-md p-2"
        placeholder="Search for a show, movie, genre, e.t.c."
        onChange={(e) => setQuery(e.target.value)}
      />
      <h1>Top Search</h1>
      <ul>
        {results.map((movie) => (
          <li key={movie.id} className="flex flex-row items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
            />
            <p>{movie.title}</p>
            <Link href={`/movie/${movie.id}`}>보러가기</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
