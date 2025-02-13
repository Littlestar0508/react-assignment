import module from '../styles/MusicSearchStyle.module.css';
import { IoIosSearch } from 'react-icons/io';
import { setQuery } from '../utils/query-function';
import { useEffect, useState } from 'react';

interface MusicSearchFormType {
  searchResult: string;
  onUpdate: React.Dispatch<React.SetStateAction<string>>;
}

export default function MusicSearchForm({
  searchResult,
  onUpdate,
}: MusicSearchFormType) {
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.currentTarget.value);
  };

  const [isPossibleSearch, setIsPossibleSearch] = useState(false);

  const handleClickSearch = () => {
    if (!isPossibleSearch) {
      return;
    }
    setQuery(searchResult);
  };

  useEffect(() => {
    const searchState = searchResult.trim().length > 1;
    setIsPossibleSearch(searchState);
  }, [searchResult]);

  return (
    <form
      className={module['music-search-container']}
      action={handleClickSearch}
    >
      <label htmlFor="music-search" className="sr-only">
        음악 검색
      </label>
      <button
        className={module['music-search-btn']}
        type="button"
        aria-label="음악 검색"
        onClick={handleClickSearch}
        aria-disabled={!isPossibleSearch}
      >
        <IoIosSearch size={32} fill="#F7F7F7" />
      </button>
      <input
        id="music-search"
        className={module['music-search-bar']}
        type="search"
        placeholder="검색어를 입력해주세요."
        onChange={handleChangeSearch}
        value={searchResult}
      />
    </form>
  );
}
