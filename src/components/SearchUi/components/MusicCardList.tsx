import MusicCard from './MusicCard';
import module from '../styles/MusicCardListStyle.module.css';
import MusicList from '../data/MusicList';

export default function MusicCardList() {
  return (
    <div className={module['music-card-list-container']}>
      {MusicList.map((item) => (
        <MusicCard key={item.id} item={item} />
      ))}
    </div>
  );
}
