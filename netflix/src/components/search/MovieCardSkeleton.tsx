const MovieCardSkeleton = () => {
  return (
    <div className="flex items-center gap-4 bg-[#424242] pr-3">
      <div className="animate-skeleton flex h-19 w-[146px] shrink-0" />
      <div className="flex h-full w-full flex-col justify-center gap-2">
        <span className="animate-skeleton flex h-3 w-full rounded-[.25rem]" />
        <span className="animate-skeleton flex h-3 w-3/4 rounded-[.25rem]" />
      </div>
      <div className="animate-skeleton flex h-7 w-7 shrink-0 rounded-full" />
    </div>
  );
};
export default MovieCardSkeleton;
