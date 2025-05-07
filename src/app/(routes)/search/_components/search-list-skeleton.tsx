export default function SearchListSkeleton() {
  return (
    <div className="space-y-2 px-4 py-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-background-02 flex animate-pulse items-center rounded-sm p-2">
          <div className="h-[76px] w-[100px] rounded bg-gray-700" />
          <div className="ml-6 flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded bg-gray-700" />
            <div className="h-4 w-1/2 rounded bg-gray-700" />
          </div>
          <div className="ml-4 h-6 w-6 rounded-full bg-gray-700" />
        </div>
      ))}
    </div>
  );
}
