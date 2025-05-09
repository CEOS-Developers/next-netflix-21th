interface SkeletonCardProps {
  itemWidth: string;
  itemHeight: string;
  shape?: "rectangle" | "circle";
}

const SkeletonCard = ({
  itemWidth,
  itemHeight,
  shape = "rectangle",
}: SkeletonCardProps) => {
  return (
    <div className="flex space-x-2 px-3 overflow-x-hidden">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-300 ${
            shape === "circle" ? "rounded-full" : "rounded-[2px]"
          }`}
          style={{
            width: itemWidth,
            height: itemHeight,
            minWidth: itemWidth,
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonCard;
