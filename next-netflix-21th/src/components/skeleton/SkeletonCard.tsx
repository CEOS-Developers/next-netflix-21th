import clsx from "clsx";

import SectionTitle from "@/components/home/SectionTitle";

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
      <div className="scrollbar-hide flex gap-2 overflow-x-auto px-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "animate-pulse bg-gray-300",
              shape === "circle" ? "rounded-full" : "rounded-[2px]",
            )}
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
