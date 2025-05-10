import Image from "next/image";
import { API_URLS } from "@/lib/apiUrls";
import { fetchMovies } from "@/lib/tmdb";
import HorizontalScroll from "./horizontal-scroll";
import SqaurePoster from "./square-poster";

const Previews = async () => {
  const { results } = await fetchMovies(API_URLS.koreaMovies);

  return (
    <div className="flex flex-col gap-6 pl-3 py-6">
      <h1 className="font-Headline1 pl-1">Previews</h1>
      <HorizontalScroll>
        {results.map(
          ({
            id,
            title,
            poster_path,
          }: {
            id: number;
            title: string;
            poster_path: string;
          }) => (
            <SqaurePoster key={id}>
              <Image
                className="object-cover w-[102px] h-[102px]"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width={102}
                height={102}
              />
            </SqaurePoster>
          )
        )}
      </HorizontalScroll>
    </div>
  );
};

export default Previews;
