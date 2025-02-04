import module from './CartStyles.module.css';
import { ItemType } from './constant';
import { useState } from 'react';

type IncDecType = Pick<ItemType, 'count' | 'max'> & {
  onUpdate?: (newCount: number) => void;
};

export default function IncDecComponent({ count, max, onUpdate }: IncDecType) {
  const [curCount, setCurCount] = useState(count);

  // 덧셈 로직
  const handlePlusChange = () => {
    const nextCount = curCount + 1;
    setCurCount(nextCount);
    onUpdate?.(nextCount);
  };

  // 뺄셈 로직
  const handleMinusChange = () => {
    const nextCount = curCount - 1;
    setCurCount(nextCount);
    onUpdate?.(nextCount);
  };

  return (
    <div className={module['inc-dec-container']}>
      <button
        type="button"
        className={module['set-count']}
        onClick={handleMinusChange}
        // 현재 값이 1이라면 disabled 적용
        disabled={curCount === 1 ? true : false}
        aria-disabled={curCount === 1 ? true : false}
        aria-label="감소 버튼"
      >
        -
      </button>
      <p className={module['item-count']}>{count}</p>

      <button
        type="button"
        className={module['set-count']}
        onClick={handlePlusChange}
        // 현재 값이 max와 일치한다면 disabled 적용
        disabled={curCount === max ? true : false}
        aria-disabled={curCount === max ? true : false}
        aria-label="증가 버튼"
      >
        +
      </button>
    </div>
  );
}
