import { useEffect, useState } from 'react';
import MusicCardList from './components/MusicCardList';
import MusicSearchForm from './components/MusicSearchForm';
import MusicSearchFooter from './components/MusicSearchFooter';
import musicList from './data/MusicList';
import { type MusicArrayList } from './types';
import { getQuery } from './utils/query-function';

// query값을 받아오고 만약 존재하지 않는다면 공백(null or undefined 방지)
const baseResult = () => getQuery() ?? '';

export default function SearchMusicUI() {
  // 검색어 상태
  const [searchResult, setSearchResult] = useState(baseResult);
  // musicList 상태
  const [resultList] = useState<MusicArrayList>(musicList);

  // 뒤로가기 구현을 위한 useEffect
  useEffect(() => {
    const handlePopState = () => {
      setSearchResult(baseResult);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        gap: '3rem',
        marginBlockStart: '2rem',
        position: 'relative',
      }}
    >
      <MusicSearchForm searchResult={searchResult} onUpdate={setSearchResult} />
      <MusicCardList
        list={resultList}
        listFilter={searchResult.toLowerCase()}
      />
      <MusicSearchFooter />
    </div>
  );
}
