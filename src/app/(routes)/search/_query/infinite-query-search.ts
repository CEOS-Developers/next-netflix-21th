import { useInfiniteQuery } from '@tanstack/react-query';

// 받아온 페이지 번호, keyword로 데이터 값 fetch (임시)
const fetchSearchMovies = async ({ keyword, pageParam }: { keyword: string; pageParam: number }) => {
  const res = await fetch(`/api/products/search?keyword=${keyword}&page=${pageParam}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

const useGetSearchMovies = (keyword: string) => {
  return useInfiniteQuery({
    queryKey: ['search', keyword],
    queryFn: ({ pageParam = 1 }) => fetchSearchMovies({ keyword, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};

export default useGetSearchMovies;
