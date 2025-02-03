import CartItem from './CartItem';
import module from './CartStyles.module.css';

export default function CartList() {
  return (
    <div className={module.container}>
      <ul className={module['ul-container']}>
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </div>
  );
}
