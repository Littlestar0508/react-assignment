import SignIn from '../components/SignUpIn/SignIn';
import SignUp from '../components/SignUpIn/SignUp';
import CoupangLogin from '../components/Coupang/CoupangLogin';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <CoupangLogin></CoupangLogin>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </StrictMode>
  );
}
