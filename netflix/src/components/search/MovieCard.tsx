import Image from "next/image";
import PlayIcon from "@/assets/images/PlayIcon.svg";
import { Movie } from "@/types/tmdb";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { goToMovieDetail } from "@/utils/routeFunction";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const onCardClick = useCallback(() => {
    goToMovieDetail(router, movie.id);
  }, [router, movie.id]);

  return (
    <div
      className="box-border flex h-[4.75rem] w-full cursor-pointer items-center border-0 bg-[#424242] pr-3 transition-colors hover:bg-[#4a4a4a]"
      onClick={onCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onCardClick();
        }
      }}
      aria-label={`View details for ${movie.title}`}
    >
      <div className="relative h-[4.75rem] w-[9.125rem]">
        {movie.poster_path ? (
          <Image
            style={{ objectFit: "cover" }}
            src={imageUrl}
            alt={`Poster for ${movie.title}`}
            fill
            sizes="(max-width: 146px) 100vw, 146px"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = PlayIcon;
            }}
          />
        ) : (
          <div className="b2 flex h-full w-full items-center justify-center bg-[#4f4f4f] text-[#808080]">
            No Image
          </div>
        )}
      </div>
      <span className="b1 ml-2 line-clamp-2 flex-1 leading-[1.4] text-white">
        {movie.title}
      </span>
      <button
        type="button"
        className="cursor-not-allowed opacity-50"
        aria-label="Play button (disabled)"
        disabled
      >
        <PlayIcon />
      </button>
    </div>
  );
};

export default MovieCard;
