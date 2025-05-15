"use client"

import { DetailItem } from "@/types/tmdb";
import { useEffect, useState } from "react";
import { getDetail} from "@/apis/tmdb";
import { useParams } from "next/navigation";
import { IMAGE_BASE_URL } from "@/constants/tmdb";
import Image from "next/image";
import RightArrow from "@/public/icons/home/rightArrow.svg"

const ProgramsDetail = () => {
  const [detail, setDetail] = useState<DetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams<{ media_type: string; id: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      const id = params.id;
      const mediaType = params.media_type;
      
      const response = await getDetail(mediaType, id);
      setDetail(response);
      setLoading(false);
    }; fetchDetails();
  }, [params.id, params.media_type]);

  if (loading || !detail) {
    return <div>Loading...</div>;
  }

  const imageUrl = `${IMAGE_BASE_URL}original${detail.poster_path}`;
  const title = "title" in detail ? detail.title : detail.name;
  const overview = detail.overview;

  return (
    <div className="pb-20 flex flex-col items-center justify-center">

      <div className="relative w-[375px] h-[415px]">
        <Image src={imageUrl} alt={title} fill/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-[24px]">
        <div className="flex items-center justify-center gap-[12px] bg-gray-100 w-[327px] h-[55px] rounded-[4px]">
          <RightArrow />
          <p className="text-subhead1 text-black">Play</p></div>

        <div className="pt-[16px] pb-[24px] text-headline2 ">{title}</div>
        <div className="text-caption3">
          {overview}
        </div>
      </div>

    </div>
  );
};

export default ProgramsDetail;
