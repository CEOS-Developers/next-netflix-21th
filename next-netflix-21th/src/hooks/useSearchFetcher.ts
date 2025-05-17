import { getMoviePopular, searchMulti } from "@/apis/tmdb";

import { Media } from "@/types/tmdb";

export const fetchPopular = async (pageNum: number): Promise<Media[]> => {
  const res = await getMoviePopular(pageNum);
  return res.results.map((item: Omit<Media, "media_type">) => ({
    ...item,
    media_type: "movie",
  }));
};

export const fetchSearch = async (
  query: string,
  pageNum: number,
): Promise<Media[]> => {
  const res = await searchMulti(query, pageNum);
  const results = res.results as Array<Media | { media_type: "person" }>;

  return results
    .filter(
      (item): item is Media =>
        item.media_type === "movie" || item.media_type === "tv",
    )
    .map(item => item);
};
