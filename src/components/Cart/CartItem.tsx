import module from './CartStyles.module.css';
import IncDecComponent from './IncDecComponent';
import { type ItemType } from './constant';

type CartItemType = Pick<ItemType, 'src' | 'price' | 'desc'>;

export default function CartItem({ src, price, desc }: CartItemType) {
  return (
    <li className={module['li-item']}>
      <img src={src} alt="" className={module['cart-image']} />
      <div className={module['item-text']}>
        <h3 className={module['item-title']}>{desc}</h3>
        <p className={module['item-desc']}>{price}</p>
      </div>
      <IncDecComponent />
    </li>
  );
}
