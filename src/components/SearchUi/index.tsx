import { useState } from 'react';
import MusicCardList from './components/MusicCardList';
import MusicSearchForm from './components/MusicSearchForm';
import MusicSearchFooter from './components/MusicSearchFooter';
import musicList from './data/MusicList';
import { type MusicArrayItem, type MusicArrayList } from './types';
import { getQuery } from './utils/query-function';

const baseResult = getQuery() ?? '';

export default function SearchMusicUI() {
  const [searchResult, setsearchResult] = useState(baseResult);

  const [resultList, setResultList] = useState<MusicArrayList>(musicList);

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
      <MusicSearchForm searchResult={searchResult} onUpdate={setsearchResult} />
      <MusicCardList
        list={resultList}
        listFilter={searchResult.toLowerCase()}
      />
      <MusicSearchFooter />
    </div>
  );
}
