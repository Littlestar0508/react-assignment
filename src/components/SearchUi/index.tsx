import MusicCard from './components/MusicCard';
import MusicSearchForm from './components/MusicSearchForm';

export default function SearchMusicUI() {
  return (
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <MusicCard />
      <MusicSearchForm />
    </div>
  );
}
