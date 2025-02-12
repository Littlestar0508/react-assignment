import module from '../styles/MusicCardStyle.module.css';

export default function MusicCard() {
  return (
    <section className={module['music-card-container']}>
      <img
        className={module['album-cover']}
        src="albumCover/60s-cardin.webp"
        alt=""
      />
      <h3 className={module['song-title']}>{"60's Cardin"}</h3>
      <p className={module['artist-name']}>글렌체크</p>
    </section>
  );
}
