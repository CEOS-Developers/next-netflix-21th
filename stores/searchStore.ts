import { create } from 'zustand';

import { MediaInfos } from '@/types/movie.types';

interface SearchState {
	query: string;
	setQuery: (query: string) => void;
	results: MediaInfos;
	setResults: (v: MediaInfos | ((prev: MediaInfos) => MediaInfos)) => void;
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
