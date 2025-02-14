import style from '../styles/MusicSearchStyle.module.css';
import { IoIosSearch } from 'react-icons/io';
import { setQuery } from '../utils/query-function';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface MusicSearchFormType {
  searchResult: string;
  onUpdate: React.Dispatch<React.SetStateAction<string>>;
}

export default function MusicSearchForm({
  searchResult,
  onUpdate,
}: MusicSearchFormType) {
  // 검색어가 변경되면 이를 update하여 리렌더링 유도
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.currentTarget.value);
  };

  // aria-disabled와 submit이벤트를 방지하고자 생성된 상태
  const [isPossibleSearch, setIsPossibleSearch] = useState(false);

  // sweetalert 함수
  const showAlert = async (): Promise<void> => {
    await withReactContent(Swal).fire({
      icon: 'error',
      title: '최소 공백을 제외한 1글자 이상 입력해주세요.',
    });
  };

  const handleClickSearch = async () => {
    if (!isPossibleSearch) {
      await showAlert();
      return;
    }
    // 만약 검색이 성공했다면 query를 ?search='검색어' 추가
    setQuery(searchResult);
  };

  // 검색어의 길이가 바뀌는지 관찰
  useEffect(() => {
    const searchState = searchResult.trim().length > 1;
    setIsPossibleSearch(searchState);
  }, [searchResult]);

  return (
    <form
      className={style['music-search-container']}
      action={handleClickSearch}
    >
      <label htmlFor="music-search" className="sr-only">
        음악 검색
      </label>
      <button
        className={style['music-search-btn']}
        type="submit"
        aria-label="음악 검색"
        // 검색어 길이에 따라 aria-disabled 설정
        aria-disabled={!isPossibleSearch}
      >
        <IoIosSearch size={32} fill="#F7F7F7" />
      </button>
      <input
        id="music-search"
        className={style['music-search-bar']}
        type="search"
        placeholder="검색어를 입력해주세요."
        onChange={handleChangeSearch}
        value={searchResult}
      />
    </form>
  );
}
