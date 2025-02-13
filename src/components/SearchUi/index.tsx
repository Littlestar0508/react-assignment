import { useEffect, useState } from 'react';
import MusicCardList from './components/MusicCardList';
import MusicSearchForm from './components/MusicSearchForm';
import MusicSearchFooter from './components/MusicSearchFooter';
import musicList from './data/MusicList';
import { type MusicArrayList } from './types';
import { getQuery } from './utils/query-function';

const baseResult = () => getQuery() ?? '';

export default function SearchMusicUI() {
  const [searchResult, setSearchResult] = useState(baseResult);

  const [resultList] = useState<MusicArrayList>(musicList);

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
