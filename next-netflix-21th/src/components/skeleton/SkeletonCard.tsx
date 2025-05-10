import SectionTitle from "../home/SectionTitle";

interface SkeletonCardProps {
  title: string;
  itemWidth: string;
  itemHeight: string;
  shape?: "rectangle" | "circle";
}

const SkeletonCard = ({
  title,
  itemWidth,
  itemHeight,
  shape = "rectangle",
}: SkeletonCardProps) => {
  return (
    <div className="w-full max-w-[375px]">
      <SectionTitle>{title}</SectionTitle>
      <div className="flex gap-2 px-3 overflow-x-auto scrollbar-hide">
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
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
