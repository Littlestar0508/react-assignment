import { useState } from 'react';
import CartItem from './CartItem';
import CartTitle from './CartTitle';
import module from './CartStyles.module.css';
import { INITIAL_ARRAY } from './constant';
import CartPrice from './CartPrice';

export default function CartList() {
  const [itemArray, setItemArray] = useState(INITIAL_ARRAY);

  // 상태를 관리하기 위한 generate함수이다
  // index와 newCount를 받아와 업데이트를 진행하고 리렌더링을 유발한다
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

  // 총 가격을 계산하는 파생된 상태 변수이다
  const sumPrice = itemArray.reduce((acc, cur) => {
    return (acc += cur.price * cur.count);
  }, 0);

  return (
    <div className={module.container}>
      <CartTitle />
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
      <CartPrice sum={sumPrice} />
    </div>
  );
}
