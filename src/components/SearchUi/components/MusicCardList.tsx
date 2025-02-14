import MusicCard from './MusicCard';
import module from '../styles/MusicCardListStyle.module.css';
import { MusicArrayList } from '../types';
import { checkArrContainTrue, replaceBlankToNull } from '../utils/filter';

interface MusicCardListType {
  list: MusicArrayList;
  listFilter: string;
}

export default function MusicCardList({ list, listFilter }: MusicCardListType) {
  const newList = list.filter((item) => {
    return (
      replaceBlankToNull(item.artist).includes(
        replaceBlankToNull(listFilter)
      ) ||
      replaceBlankToNull(item.title)
        .toLowerCase()
        .includes(replaceBlankToNull(listFilter)) ||
      replaceBlankToNull(item.album)
        .toLowerCase()
        .includes(replaceBlankToNull(listFilter)) ||
      checkArrContainTrue(item.tags, replaceBlankToNull(listFilter))
    );
  });

  return (
    <>
      {newList.length > 0 && (
        <>
          <p style={{ color: '#854836', fontWeight: 600, fontSize: '1.25rem' }}>
            {newList.length}개 검색됨
          </p>
          <div className={module['music-card-list-container']}>
            {newList.map((item) => (
              <MusicCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
      {!(newList.length > 0) && (
        <p
          style={{
            height: '100vh',
            color: '#854836',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          검색된게 없음!
        </p>
      )}
    </>
  );
}
