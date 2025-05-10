"use client";

import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  const handleVideoEnd = () => {
    router.push("/home");
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <video
          src="/netflix.webm"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
