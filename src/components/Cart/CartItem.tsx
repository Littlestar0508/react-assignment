import module from './CartStyles.module.css';
import IncDecComponent from './IncDecComponent';
import { type ItemType } from './constant';

export default function CartItem({ src, price, desc, count, id }: ItemType) {
  return (
    <li className={module['li-item']} id={id}>
      <img src={src} alt="" className={module['cart-image']} />
      <div className={module['item-text']}>
        <h3 className={module['item-title']}>{desc}</h3>
        <p className={module['item-desc']}>{price}</p>
      </div>
      <IncDecComponent count={count} />
    </li>
  );
}
