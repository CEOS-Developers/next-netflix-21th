import { useRouter } from "next/navigation";

export const goToMovieDetail = (router: ReturnType<typeof useRouter>, movieId: number) => {
  router.push(`/movie-detail?id=${movieId}`);
};

export const goToTvDetail = (router: ReturnType<typeof useRouter>, tvId: number) => {
  router.push(`/tv-detail?id=${tvId}`);
};