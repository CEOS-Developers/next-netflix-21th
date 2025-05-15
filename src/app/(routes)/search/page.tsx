import SearchBoard from './_components/search-board';
import Providers from './_provider/providers';

export default function Search() {
  return (
    <Providers>
      <div className="flex h-screen flex-col">
        <SearchBoard />
      </div>
    </Providers>
  );
}
