import { ItemType } from './constant';
import S from './CartStyles.module.css';

type IncDecType = Pick<ItemType, 'count'>;

export default function IncDecComponent({ count }: IncDecType) {
  return (
    <div className={S['inc-dec-container']}>
      <button type="button" className={S['set-count']}>
        -
      </button>
      <p className={S['item-count']}>{count}</p>

      <button type="button" className={S['set-count']}>
        +
      </button>
    </div>
  );
}
