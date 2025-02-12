import MusicCardList from './components/MusicCardList';
import MusicSearchForm from './components/MusicSearchForm';

export default function SearchMusicUI() {
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
      <MusicSearchForm />
      <MusicCardList />
    </div>
  );
}
