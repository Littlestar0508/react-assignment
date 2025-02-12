import module from '../styles/MusicSearchStyle.module.css';
import { IoIosSearch } from 'react-icons/io';

export default function MusicSearchForm() {
  return (
    <form className={module['music-search-container']}>
      <label htmlFor="music-search" className="sr-only">
        음악 검색
      </label>
      <button
        className={module['music-search-btn']}
        type="button"
        aria-label="음악 검색"
      >
        <IoIosSearch size={32} fill="#F7F7F7" />
      </button>
      <input
        id="music-search"
        className={module['music-search-bar']}
        type="search"
        placeholder="검색어를 입력해주세요."
      />
    </form>
  );
}
