export interface Product {
  id: string;
  type: 'movie' | 'tv';
  name: string | null;
  image: string | null;
  description: string | null;
}
