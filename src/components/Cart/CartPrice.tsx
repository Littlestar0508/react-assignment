import module from './CartStyles.module.css';

export default function CartPrice({ sum }: { sum: number }) {
  return (
    <div className={module['cart-sum']}>
      <span>구매 총액 : </span>
      <span>{sum.toLocaleString()}원</span>
    </div>
  );
}
