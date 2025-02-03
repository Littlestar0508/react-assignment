import CartList from '../components/Cart/CartList';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <CartList />
    </StrictMode>
  );
}
