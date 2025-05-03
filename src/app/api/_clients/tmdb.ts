import axios from 'axios';

const ACCESS_TOKEN = process.env.TMBD_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  throw new Error('Missing TMBD_ACCESS_TOKEN for environment variable.');
}

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    language: 'en-US',
  },
});
