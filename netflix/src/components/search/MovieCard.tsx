import Image from "next/image";
import PlayIcon from "@/assets/images/PlayIcon.svg";
import { Movie } from "@/types/tmdb";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : PlayIcon;

  return (
    <div className=" h-[4.75rem] box-border flex h-19 w-full cursor-pointer items-center border-0 bg-[#424242] pr-3">
      <Image
        style={{ objectFit: "cover",height:"4.75rem",width:"146px"}}
        src={imageUrl}
        alt={movie.title}
        height={76}
        width={146}
        priority  
      />
      <span className="b1 ml-2 line-clamp-2 flex-1 leading-[1.4] text-white">
        {movie.title}
      </span>
      <button type="button" className="cursor-not-allowed">
        <PlayIcon />
      </button>
    </div>
  );
};
export default MovieCard;
