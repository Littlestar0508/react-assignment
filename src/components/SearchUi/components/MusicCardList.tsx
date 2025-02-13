import MusicCard from './MusicCard';
import module from '../styles/MusicCardListStyle.module.css';
import { MusicArrayList } from '../types';
import { checkArrContainTrue, replaceBlankToNull } from '../utils/filter';

interface MusicCartListType {
  list: MusicArrayList;
  listFilter: string;
}

export default function MusicCardList({ list, listFilter }: MusicCartListType) {
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
    <div className={module['music-card-list-container']}>
      {newList.map((item) => (
        <MusicCard key={item.id} item={item} />
      ))}
    </div>
  );
}
