import Image from "next/image";
import Link from "next/link";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

import { Media } from "@/types/tmdb";

import PlayIcon from "@/public/icons/search/PlayIcon.svg";

interface SearchCardItemProps {
  media: Media;
  priority?: boolean;
}

const SearchCardItem = ({ media, priority }: SearchCardItemProps) => {
  const displayTitle =
    "title" in media
      ? media.title?.trim() || "NO TITLE"
      : media.name?.trim() || "NO TITLE";

  const posterUrl = media.poster_path
    ? `${IMAGE_BASE_URL}w500${media.poster_path}`
    : null;

  return (
    <Link href={`/detail/${media.media_type}/${media.id}`}>
      <div className="flex h-[76px] w-full cursor-pointer">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={displayTitle}
            width={146}
            height={76}
            priority={priority}
            className="h-full w-[146px] shrink-0 object-cover"
          />
        ) : (
          <div className="text-caption2 flex h-full w-[146px] shrink-0 items-center justify-center bg-gray-400/70 text-white">
            NO IMAGE
          </div>
        )}

        <div className="flex w-[229px] items-center justify-between bg-gray-300 py-[23px] pr-4 pl-[19px] hover:bg-gray-400">
          <span className="text-body2 max-w-[158px] truncate text-white">
            {displayTitle}
          </span>
          <PlayIcon className="h-7 w-7" />
        </div>
      </div>
    </Link>
  );
};

export default SearchCardItem;
