import module from '../styles/MusicCardStyle.module.css';
import { type MusicArrayItem } from '../types';

interface MusicCardType {
  item: MusicArrayItem;
}

export default function MusicCard({ item }: MusicCardType) {
  return (
    <section className={module['music-card-container']}>
      <img className={module['album-cover']} src={item.src} alt="" />
      <h3 className={module['song-title']}>{item.title}</h3>
      <p className={module['artist-name']}>{item.artist}</p>
    </section>
  );
}
