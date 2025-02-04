import S from './CartStyles.module.css';
import { ItemType } from './constant';
import { useState } from 'react';

type IncDecType = Pick<ItemType, 'count'> & {
  onUpdate?: (newCount: number) => void;
};

export default function IncDecComponent({ count, onUpdate }: IncDecType) {
  const [curCount, setCurCount] = useState(count);

  const handleChange = () => {
    const nextCount = curCount + 1;
    setCurCount(nextCount);
    onUpdate?.(nextCount);
  };

  return (
    <div className={S['inc-dec-container']}>
      <button type="button" className={S['set-count']} onClick={handleChange}>
        -
      </button>
      <p className={S['item-count']}>{count}</p>

      <button type="button" className={S['set-count']}>
        +
      </button>
    </div>
  );
}
