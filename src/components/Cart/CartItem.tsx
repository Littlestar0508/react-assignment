import IncDecComponent from './IncDecComponent';
import module from './CartStyles.module.css';

export default function CartItem() {
  return (
    <li className={module['li-item']}>
      <img src="src/cart-item-1.png" alt="" className={module['cart-image']} />
      <div className={module['item-text']}>
        <h3 className={module['item-title']}>1A 우유 900mL</h3>
        <p className={module['item-desc']}>1,880원</p>
      </div>
      <IncDecComponent />
    </li>
  );
}
