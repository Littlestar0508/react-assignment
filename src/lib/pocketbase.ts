import PocketBase from 'pocketbase';

const END_POINT = import.meta.env.VITE_PB_URL;
const pb = new PocketBase(END_POINT);

export default pb;
