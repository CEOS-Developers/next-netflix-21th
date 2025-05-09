import type { Product } from './product';

export interface RawTMDB {
  id: Product['id'];
  media_type?: Product['type'];
  title?: Product['name'];
  name?: Product['name'];
  poster_path?: Product['image'];
  overview?: Product['description'];
  popularity?: number;
  release_date?: string;
  first_air_date?: string;
}
