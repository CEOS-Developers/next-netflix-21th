export default function SearchListSkeleton() {
  return (
    <div>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="bg-background-02 mb-1 flex w-full animate-pulse items-center">
          <div className="h-[76px] w-[100px] bg-gray-700" />
          <div className="ml-6 flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded bg-gray-700" />
            <div className="h-4 w-1/2 rounded bg-gray-700" />
          </div>
          <div className="mr-3 ml-4 h-6 w-6 rounded-full bg-gray-700" />
        </div>
      ))}
    </div>
  );
}
