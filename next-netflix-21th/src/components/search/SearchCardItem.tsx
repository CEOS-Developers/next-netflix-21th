import Image from "next/image";

import PlayIcon from "@/public/icons/search/PlayIcon.svg";

interface SearchCardItemProps {
  title: string;
  imageUrl: string;
}

const SearchCardItem = ({ title, imageUrl }: SearchCardItemProps) => {
  return (
    <div className="flex h-[76px] w-full cursor-pointer">
      <Image
        src={imageUrl}
        alt={title}
        width={146}
        height={76}
        className="h-full w-[146px] shrink-0 object-cover"
      />
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
