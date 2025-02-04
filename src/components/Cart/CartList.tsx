import { useState } from 'react';
import CartItem from './CartItem';
import module from './CartStyles.module.css';
import { INITIAL_ARRAY } from './constant';

export default function CartList() {
  const [itemArray, setItemArray] = useState(INITIAL_ARRAY);

  const generateHandleUpdateArray = (index: number) => (newCount: number) => {
    const nextArray = itemArray.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          count: newCount,
        };
      } else {
        return item;
      }
    });

    setItemArray(nextArray);
  };

  const sumPrice = itemArray.reduce((acc, cur) => {
    return (acc += cur.price * cur.count);
  }, 0);

  return (
    <div className={module.container}>
      <ul className={module['ul-container']}>
        {itemArray.map((item, idx) => {
          return (
            <CartItem
              id={item.id}
              src={item.src}
              price={item.price}
              desc={item.desc}
              count={item.count}
              key={idx}
              index={idx}
              max={item.max}
              onUpdate={generateHandleUpdateArray}
            />
          );
        })}
      </ul>
      <div>{sumPrice.toLocaleString()}</div>
    </div>
  );
}
