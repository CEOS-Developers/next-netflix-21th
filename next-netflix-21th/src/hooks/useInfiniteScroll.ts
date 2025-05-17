import { useEffect, useRef } from "react";

import { throttle } from "@/utils/throttle";

export const useInfiniteScroll = (
  targetRef: React.RefObject<HTMLElement>,
  onIntersect: () => void,
  options?: IntersectionObserverInit,
  delay = 300, // throttle 간격
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) {
      return;
    }

    // 스로틀을 적용한 콜백 생성
    const observerCallback = throttle(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      delay,
    );

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "0px 0px 200px 0px",
      threshold: 0.1,
      ...options,
    });

    observer.observe(target);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [targetRef, onIntersect, options, delay]);
};
