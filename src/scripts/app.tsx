import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </StrictMode>
  );
}
