import SearchIcon from '@public/icons/search/search.svg';
import DeleteIcon from '@public/icons/search/delete.svg';

interface Props {
  keyword: string;
  handleSearch: () => void;
  onDeleteButtonClicked: () => void;
  setKeyword: (kw: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  keyword,
  handleSearch,
  onDeleteButtonClicked,
  setKeyword,
  handleKeyDown,
}: Props) {
  const hasInput = keyword === '' ? false : true;

  return (
    <div className="bg-background-02 mt-11 flex h-13 w-full items-center">
      <div className="ml-4" onClick={handleSearch}>
        <SearchIcon className="text-background-03" />
      </div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search for a show, movie, genre, e.t.c."
        className="m-4 w-full placeholder-[color:var(--color-background-03)] focus:outline-none"
      />
      <div className="mr-4" onClick={onDeleteButtonClicked}>
        <DeleteIcon className={`text-background-03 ${hasInput ? 'cursor-pointer' : ''}`} />
      </div>
    </div>
  );
}
