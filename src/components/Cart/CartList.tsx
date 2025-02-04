import CartItem from './CartItem';
import module from './CartStyles.module.css';
import { INITIAL_ARRAY } from './constant';

export default function CartList() {
  return (
    <div className={module.container}>
      <ul className={module['ul-container']}>
        {INITIAL_ARRAY.map((item, idx) => {
          return (
            <CartItem
              src={item.src}
              price={item.price}
              desc={item.desc}
              key={idx}
            />
          );
        })}
      </ul>
    </div>
  );
}
