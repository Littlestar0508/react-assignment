import IncDecComponent from './IncDecComponent';

export default function CartItem() {
  return (
    <li>
      <h3>1A 우유 900mL</h3>
      <p>1880원</p>
      <img src="src/cart-item-1.png" alt="" />
      <IncDecComponent />
    </li>
  );
}
