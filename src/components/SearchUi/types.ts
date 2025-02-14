import musicList from './data/MusicList';

// musicList의 불러와서 타입을 지정
export type MusicArrayItem = (typeof musicList)[0];
export type MusicArrayList = MusicArrayItem[];
