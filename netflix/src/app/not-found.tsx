"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-black bg-[url('/NotFound.png')] bg-cover bg-fixed bg-center bg-no-repeat text-center">
      <h1 className="flex text-[2rem]">길을 잃으셨나요?</h1>
      <p className="flex px-10 text-[.875rem]">
        죄송합니다. 해당 페이지를 찾을 수 없습니다. 홈페이지로 이동해 다양한
        콘텐츠를 만나보세요.
      </p>
      <button
        type="button"
        className="flex cursor-pointer rounded-[.625rem] bg-white px-[0.8rem] py-[.25rem] text-[1rem] leading-[2.4rem] font-medium break-words whitespace-nowrap text-black"
        onClick={() => router.push("/browse")}
      >
        Netflix 홈
      </button>
    </div>
  );
};
export default NotFoundPage;
