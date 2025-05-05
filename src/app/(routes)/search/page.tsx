import ReactQueryProvider from './_query/providers';
import SearchBoard from './_components/search-board';

export default function Search() {
  return (
    <div className="flex h-screen flex-col">
      <ReactQueryProvider>
        <SearchBoard />
      </ReactQueryProvider>
    </div>
  );
}
