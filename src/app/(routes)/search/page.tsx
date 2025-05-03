import ReactQueryProvider from './_query/providers';
import SearchList from './_components/search-list';

export default function Search() {
  return (
    <div className='h-screen flex flex-col'>
      <ReactQueryProvider>
        <SearchList />
      </ReactQueryProvider>
    </div>
  );
}
