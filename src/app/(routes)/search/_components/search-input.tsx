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
  return (
    <div className="bg-background-02 mt-11 flex h-13 w-full items-center">
      <div className="ml-4" onClick={handleSearch}>
        <SearchIcon />
      </div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search for a show, movie, genre, e.t.c."
        className="m-4 w-full placeholder-[color:var(--color-background-03)]"
      />
      <div className="mr-4" onClick={onDeleteButtonClicked}>
        <DeleteIcon />
      </div>
    </div>
  );
}
