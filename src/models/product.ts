export interface Product {
  id: string;
  type: 'movie' | 'tv' | null;
  name: string | null;
  image: string | null;
  description: string | null;
}
