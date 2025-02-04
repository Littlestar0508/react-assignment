import S from './CartStyles.module.css';
import { ItemType } from './constant';
import { useState } from 'react';

type IncDecType = Pick<ItemType, 'count' | 'max'> & {
  onUpdate?: (newCount: number) => void;
};

export default function IncDecComponent({ count, max, onUpdate }: IncDecType) {
  const [curCount, setCurCount] = useState(count);

  const handlePlusChange = () => {
    const nextCount = curCount + 1;
    setCurCount(nextCount);
    onUpdate?.(nextCount);
  };

  const handleMinusChange = () => {
    const nextCount = curCount - 1;
    setCurCount(nextCount);
    onUpdate?.(nextCount);
  };

  return (
    <div className={S['inc-dec-container']}>
      <button
        type="button"
        className={S['set-count']}
        onClick={handleMinusChange}
        disabled={curCount === 1 ? true : false}
        aria-disabled={curCount === 1 ? true : false}
        aria-label="감소 버튼"
      >
        -
      </button>
      <p className={S['item-count']}>{count}</p>

      <button
        type="button"
        className={S['set-count']}
        onClick={handlePlusChange}
        disabled={curCount === max ? true : false}
        aria-disabled={curCount === max ? true : false}
        aria-label="증가 버튼"
      >
        +
      </button>
    </div>
  );
}
