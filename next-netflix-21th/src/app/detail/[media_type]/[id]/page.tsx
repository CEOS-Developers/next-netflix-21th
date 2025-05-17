"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

import { getDetail } from "@/apis/tmdb";

import BannerSkeleton from "@/components/skeleton/BannerSkeleton";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

import { Media } from "@/types/tmdb";

import RightArrow from "@/public/icons/home/rightArrow.svg";

const ProgramsDetail = () => {
  const [detail, setDetail] = useState<Media | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams<{ media_type: string; id: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      const id = params.id;
      const mediaType = params.media_type;

      const response = await getDetail(mediaType, id);
      setDetail(response);
      setLoading(false);
    };
    fetchDetails();
  }, [params.id, params.media_type]);

  if (loading || !detail) {
    return <BannerSkeleton />;
  }

  const imageUrl = `${IMAGE_BASE_URL}original${detail.poster_path}`;
  const title = "title" in detail ? detail.title : detail.name;
  const overview =
    detail && detail.overview?.trim()
      ? detail.overview
      : "해당 콘텐츠에 대한 소개가 아직 등록되지 않았어요.";

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <div className="relative h-[415px] w-[375px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="375px"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="flex flex-col justify-center p-8 pt-[13px]">
        <button className="flex h-[45px] w-[303px] cursor-pointer items-center justify-center gap-[15px] rounded-[5px] bg-gray-100 hover:bg-gray-200">
          <RightArrow />
          <p className="text-subhead1 text-black">Play</p>
        </button>

        <div className="text-headline2 pt-8 pb-6">{title}</div>
        <div className="text-caption3 text-white/80">{overview}</div>
      </div>
    </div>
  );
};

export default ProgramsDetail;
