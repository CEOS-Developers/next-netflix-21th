import axios from 'axios';

export const tmdbAPI = axios.create({
	baseURL: process.env.NEXT_PUBLIC_TMDB_V3_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		api_key: process.env.NEXT_PUBLIC_TMDB_V3_API_KEY,
	},
});
