'use client';

import { useEffect, useRef, useState } from 'react';

import { useSearchStore } from '@/stores/searchStore';
import { getTrendingMovies, searchMovies } from '@/services/tmdb';

import SearchBar from '@/components/features/search/SearchBar';
import SearchCard from '@/components/features/search/SearchCard';
import { Movie } from '@/types/movie.types';

const SearchPage = () => {
	const { query, results, setResults } = useSearchStore();
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [page, setPage] = useState<number>(1);

	const observer = useRef<IntersectionObserver | null>(null);
	const loaderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const fetchSearchResults = async () => {
			try {
				const services = query ? searchMovies(query) : getTrendingMovies(page);
				const data = await services;
				const movieInfoList = data.results as Movie[];

				if (query) {
					setResults(movieInfoList || []);
				} else {
					setResults((prev: Movie[]) => {
						const newItems = (movieInfoList || []).filter((item) => !prev.some((p) => p.id === item.id));
						return [...prev, ...newItems];
					});
					setHasMore(data.page < data.total_pages);
				}
			} catch (error) {
				console.error('Error fetching trending movies:', error);
			}
		};

		fetchSearchResults();
	}, [query, setResults, page]);

	useEffect(() => {
		if (!loaderRef.current) return;

		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage((prev) => prev + 1);
				}
			},
			{ threshold: 1 },
		);
		observer.current.observe(loaderRef.current);
	}, [query, hasMore, loaderRef]);

	return (
		<div>
			<SearchBar />

			<div>
				<h1 className="headline1 pl-4 mt-5 mb-4">{query !== '' ? 'Search Results' : 'Top Searches'}</h1>
				{results.length === 0 ? (
					<p>No results found.</p>
				) : (
					<ul className="flex flex-col gap-1">
						{results?.map((result, index) => (
							<li key={result.id} className="w-full h-fit">
								<SearchCard result={result} priority={index < 9 ? true : false} />
							</li>
						))}
					</ul>
				)}
			</div>

			{/* 무한 스크롤 감지 */}
			<div ref={loaderRef} className="h-10" />
		</div>
	);
};

export default SearchPage;
