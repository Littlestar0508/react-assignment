import module from '../styles/MusicCardStyle.module.css';
import { type MusicArrayItem } from '../types';

interface MusicCardType {
  item: MusicArrayItem;
}

export default function MusicCard({ item }: MusicCardType) {
  const iframeCode = item.iframe;
  console.log(iframeCode);

  console.log(item.id);

  return (
    <section className={module['music-card-container']}>
      <button
        type="button"
        aria-label={`${item.title} 듣기`}
        style={{ cursor: 'pointer' }}
        popoverTarget={item.id}
      >
        <img className={module['album-cover']} src={item.src} alt="" />
      </button>
      <h3 className={module['song-title']}>{item.title}</h3>
      <p className={module['artist-name']}>{item.artist}</p>
      <div
        popover="auto"
        id={item.id}
        className={module['iframe-video']}
        dangerouslySetInnerHTML={{ __html: iframeCode }}
      />
    </section>
  );
}
