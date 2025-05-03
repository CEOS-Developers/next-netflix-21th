import ReactQueryProvider from './_query/providers';
import SearchList from './_components/search-list';

export default function Search() {
  return (
    <ReactQueryProvider>
      <SearchList />
    </ReactQueryProvider>
  );
}
