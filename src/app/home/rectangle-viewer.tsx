import Image from "next/image";
import { fetchMovies } from "@/lib/tmdb";
import HorizontalScroll from "./horizontal-scroll";
import RectanglePoster from "./rectangle-poster";
import Link from "next/link";

const RectangleViewer = async ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
  const { results } = await fetchMovies(url);

  return (
    <div className="flex flex-col gap-4 pl-3">
      <h1 className="font-Headline2 pl-1">{title}</h1>

      <HorizontalScroll>
        {results.map(
          ({
            id,
            original_title,
            poster_path,
          }: {
            id: number;
            original_title: string;
            poster_path: string;
          }) => (
            <RectanglePoster key={id}>
              <Link href={`/movie/${id}`}>
                <Image
                  className="object-cover w-[103px] h-[161px]"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title || "movie"}
                  width={103}
                  height={161}
                />
              </Link>
            </RectanglePoster>
          )
        )}
      </HorizontalScroll>
    </div>
  );
};

export default RectangleViewer;
