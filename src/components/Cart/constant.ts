export interface ItemType {
  id: string;
  desc: string;
  price: number;
  src: string;
  count: number;
}

export type ItemListType = ItemType[];

export const INITIAL_ARRAY: ItemListType = [
  {
    id: 'item-1',
    desc: '1A 우유 900mL',
    price: 1880,
    src: 'src/cart-item-1.png',
    count: 2,
  },
  {
    id: 'item-2',
    desc: '맛있는 콩나물 500g',
    price: 1280,
    src: 'src/cart-item-2.png',
    count: 4,
  },
  {
    id: 'item-3',
    desc: '고소한 두부 1kg',
    price: 2280,
    src: 'src/cart-item-3.png',
    count: 3,
  },
];
