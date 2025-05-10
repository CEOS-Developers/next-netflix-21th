import Image from "next/image";
import { fetchMovies } from "@/lib/tmdb";
import { API_URLS } from "@/lib/apiUrls";
import BannerDescription from "./banner-description";
import BannerOptions from "./banner-options";
import Previews from "./previews";
import Movies from "./movies";
import Link from "next/link";

export default async function HomePage() {
  const { results } = await fetchMovies(API_URLS.top10InKoreaToday);
  const topTenInKorea = results.slice(10);
  const randomIndex = Math.floor(Math.random() * 10);
  const randomMovie = topTenInKorea[randomIndex];
  return (
    <div className="w-full">
      <div className="relative w-[375px] h-[440px] overflow-hidden">
        <Link href={`/movie/${randomMovie.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w780/${randomMovie.poster_path}`}
            alt={randomMovie.original_title}
            width={375}
            height={440}
            priority
            className="object-cover w-[375px] h-[440px]"
          />
          <div className="absolute inset-0 z-10 bg-gradient-overlay" />
        </Link>
      </div>
      <BannerDescription rank={randomIndex + 1} />
      <BannerOptions />

      <Previews />
      <Movies />
    </div>
  );
}
