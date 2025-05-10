"use client";

import { useRef } from "react";

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const horizontalRef = useRef<HTMLDivElement>(null);

  const handleContainerWheel = (e: React.WheelEvent) => {
    if (horizontalRef.current) {
      // 세로 휠을 가로 스크롤로 바꾸기
      if (e.deltaY !== 0) {
        e.preventDefault();
        horizontalRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <div
      className="scrollbar-none flex gap-[7px] overflow-x-auto pl-3"
      ref={horizontalRef}
      onWheel={handleContainerWheel}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
