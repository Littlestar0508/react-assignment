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
    // 가수, 곡 제목, 앨범 제목, 장르들을 모두 검색할 수 있도록 구현
    // 띄어쓰기를 무시하고 검색
    // ex) 아이유 -> 아 이 유, 아이 유, 아이유 모두 다 검색 가능
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
      {/* UI가 깨지는 것을 방지하고자 newList가 없다면 viewport를 설정하여 footer를 아래로 내림 */}
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
