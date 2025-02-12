import MusicCard from './MusicCard';
import module from '../styles/MusicCardListStyle.module.css';
import { MusicArrayList } from '../types';

interface MusicCartListType {
  list: MusicArrayList;
  listFilter: string;
}

export default function MusicCardList({ list, listFilter }: MusicCartListType) {
  const newList = list.filter(
    (item) =>
      item.artist.toLowerCase().includes(listFilter) ||
      item.title.toLowerCase().includes(listFilter) ||
      item.album.toLowerCase().includes(listFilter)
  );

  return (
    <div className={module['music-card-list-container']}>
      {newList.map((item) => (
        <MusicCard key={item.id} item={item} />
      ))}
    </div>
  );
}
