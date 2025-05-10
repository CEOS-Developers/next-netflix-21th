"use client";

import { useEffect, useRef } from "react";

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = horizontalRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className="scrollbar-none flex gap-[7px] overflow-x-auto pl-3"
      ref={horizontalRef}
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;
