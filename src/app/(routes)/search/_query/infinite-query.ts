import { useInfiniteQuery } from "@tanstack/react-query";

// 받아온 페이지 번호로 데이터 값 fetch
const fetchSearchMovies = async (pageParam: number) => {
    const res = await fetch(`/api/products/popular?page=${pageParam}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  };
  
const useGetSearchMovies = () => {
    return useInfiniteQuery({
      queryKey: ['popular'],
      queryFn: ({ pageParam = 1 }) => fetchSearchMovies(pageParam),
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