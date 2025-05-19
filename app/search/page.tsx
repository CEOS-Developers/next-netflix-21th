'use client';

import { useEffect, useRef, useState } from 'react';

import { useSearchStore } from '@/stores/searchStore';
import { getTrendingMovies, searchMovies } from '@/services/tmdb';
import { MediaInfos } from '@/types/movie.types';

import SearchBar from '@/components/features/search/SearchBar';
import SearchCard from '@/components/features/search/SearchCard';

const SearchPage = () => {
	const { query, setQuery, results, setResults } = useSearchStore();
	const [hasMore, setHasMore] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const observer = useRef<IntersectionObserver | null>(null);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const isFirstPage = useRef(page === 1);

	useEffect(() => {
		setQuery('');
	}, []);

	useEffect(() => {
		// 검색어 변경 시 페이지 및 결과 초기화
		setPage(1);
		setResults([]);
		isFirstPage.current = true;
	}, [query]);

	useEffect(() => {
		const fetchSearchResults = async () => {
			try {
				setIsLoading(true); // API 호출 시작
				const services = query.trim() !== '' ? searchMovies(query, page) : getTrendingMovies(page);
				const data = await services;
				console.log(data);
				const movieInfoList = data.results as MediaInfos;

				setResults((prev: MediaInfos) => {
					const newItems = (movieInfoList || []).filter((item) => !prev?.some((p) => p.id === item.id));
					return page === 1 ? newItems : [...prev, ...newItems];
				});

				// Check if there are more pages to fetch
				setHasMore(data.page < data.total_pages);
			} catch (error) {
				console.error('Error fetching search page data:', error);
			} finally {
				setIsLoading(false); // API 호출 완료
			}
		};

		fetchSearchResults();
	}, [query, page]);

	useEffect(() => {
		if (!loaderRef.current) return;

		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasMore) {
					if (isFirstPage.current) {
						isFirstPage.current = false;
						return;
					} else {
						setPage((prev) => prev + 1);
					}
				}
			},
			{ threshold: 1 },
		);
		observer.current.observe(loaderRef.current);
	}, [query, hasMore, loaderRef]);

	return (
		<div className="pb-[65px]">
			<SearchBar />

			<div>
				<h1 className="headline1 pl-4 mt-5 mb-4">{query.trim() !== '' ? 'Search Results' : 'Top Searches'}</h1>
				{isLoading ? (
					<p className="w-full h-100 flex items-center justify-center text-gray-300 body1">Loading...</p>
				) : results.length === 0 ? (
					<p className="w-full h-100 flex items-center justify-center text-gray-300 headline2-medium">
						No results found.
					</p>
				) : (
					<ul className="flex flex-col gap-1">
						{results.map((result, index) => {
							return (
								<li key={result.id} className="w-full h-fit">
									<SearchCard result={result} priority={index < 9 ? true : false} />
								</li>
							);
						})}
					</ul>
				)}
			</div>

			{/* 무한 스크롤 감지 */}
			<div ref={loaderRef} />
		</div>
	);
};

export default SearchPage;
