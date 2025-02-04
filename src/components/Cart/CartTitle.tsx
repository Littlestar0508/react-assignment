import module from './CartStyles.module.css';

export default function CartTitle() {
  return (
    <section className={module['cart-title']}>
      <img src="src/cart-icon.svg" alt="" />
      <h3>장바구니</h3>
    </section>
  );
}
