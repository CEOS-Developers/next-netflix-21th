export interface Product {
  id: number;
  type: 'movie' | 'tv';
  name: string | null;
  image: string | null;
  description: string | null;
}
