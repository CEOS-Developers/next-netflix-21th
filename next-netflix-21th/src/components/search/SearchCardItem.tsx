import Image from "next/image";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

import PlayIcon from "@/public/icons/search/PlayIcon.svg";

interface SearchCardItemProps {
  title: string;
  imageUrl: string | null;
  priority?: boolean;
}

const SearchCardItem = ({ title, imageUrl, priority }: SearchCardItemProps) => {
  return (
    <div className="flex h-[76px] w-full cursor-pointer">
      {imageUrl && (
        <Image
          src={`${IMAGE_BASE_URL}w500${imageUrl}`}
          alt={title}
          width={146}
          height={76}
          priority={priority}
          className="h-full w-[146px] shrink-0 object-cover"
        />
      )}
      <div className="flex w-[229px] items-center justify-between bg-gray-300 py-[23px] pr-4 pl-[19px] hover:bg-gray-400">
        <span className="text-body2 max-w-[158px] truncate text-ellipsis text-white">
          {title}
        </span>
        <PlayIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default SearchCardItem;
