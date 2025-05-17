'use client';

import { SearchIcon } from '@/icons/Search';
import { useSearchStore } from '@/stores/searchStore';

const SearchBar = () => {
	const { query, setQuery } = useSearchStore();
	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form className="w-full py-5 px-6 flex gap-5 items-center bg-gray-300" onSubmit={handleSearchSubmit}>
			<SearchIcon />
			<input
				type="text"
				placeholder="Search for a show, movie, genre, etc."
				className="w-full bg-transparent outline-none text-gray-100"
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				autoFocus
			/>
		</form>
	);
};

export default SearchBar;
