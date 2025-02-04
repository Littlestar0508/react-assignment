import module from './CartStyles.module.css';
import IncDecComponent from './IncDecComponent';
import { type ItemType } from './constant';

export default function CartItem({
  src,
  price,
  desc,
  count,
  id,
  index,
  max,
  onUpdate,
}: ItemType & {
  // onUpdate에 index를 넣어 전달한다(부모 컴포넌트에게로) -> trigger 역할
  onUpdate: (index: number) => (newCount: number) => void;
  index: number;
}) {
  return (
    <li className={module['li-item']} id={id}>
      <img src={src} alt="" className={module['cart-image']} />
      <div className={module['item-text']}>
        <h3 className={module['item-title']}>{desc}</h3>
        <p className={module['item-desc']}>{price.toLocaleString()} 원</p>
      </div>
      {/* 상태를 변경하기 위해 newCount를 받아와야한다 */}
      <IncDecComponent count={count} onUpdate={onUpdate?.(index)} max={max} />
    </li>
  );
}
