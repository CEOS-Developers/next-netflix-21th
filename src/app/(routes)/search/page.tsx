import ReactQueryProvider from './_query/providers';
import SearchInput from './_components/search-input';
import SearchList from './_components/search-list';

export default function Search() {
  return (
    <div className='h-screen flex flex-col'>
      <ReactQueryProvider>
        <SearchInput />
        <SearchList />
      </ReactQueryProvider>
    </div>
  );
}
