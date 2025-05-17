import { create } from 'zustand';

import { Movie } from '@/types/movie.types';

interface SearchState {
	query: string;
	setQuery: (query: string) => void;
	results: Movie[];
	setResults: (v: Movie[] | ((prev: Movie[]) => Movie[])) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
	query: '',
	setQuery: (query) => set({ query }),
	results: [],
	setResults: (v) =>
		set((state) => ({
			results: typeof v === 'function' ? v(state.results) : v,
		})),
}));
