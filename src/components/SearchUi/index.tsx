import { useState } from 'react';
import MusicCardList from './components/MusicCardList';
import MusicSearchForm from './components/MusicSearchForm';
import musicList from './data/MusicList';
import { type MusicArrayItem, type MusicArrayList } from './types';
export default function SearchMusicUI() {
  const [searchResult, setsearchResult] = useState('');

  const [resultList, setResultList] = useState<MusicArrayList>(musicList);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        gap: '3rem',
        marginBlockStart: '2rem',
      }}
    >
      <MusicSearchForm defaultValue={searchResult} onUpdate={setsearchResult} />
      <MusicCardList
        list={resultList}
        listFilter={searchResult.toLowerCase()}
      />
    </div>
  );
}
