const SearchSkeletonCard = () => {
  return (
    <div className="flex h-[76px] w-full shrink-0 animate-pulse">
      <div className="h-full w-[146px] shrink-0 rounded bg-gray-400" />
      <div className="flex w-[229px] items-center justify-between bg-gray-300 py-[23px] pr-4 pl-[19px]" />
    </div>
  );
};

export default SearchSkeletonCard;
