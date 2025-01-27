import '../../styles/components/CoupangLogin.css';
import CoupangInput from './CoupangInput';
import CoupangButton from './CoupangButton';
import { useState } from 'react';
import PocketBase from 'pocketbase';

const END_POINT = 'https://teamproject.pockethost.io';

const pb = new PocketBase(END_POINT);

export default function CoupangLogin() {
  const [controlPasswordVisible, setControlPasswordVisible] =
    useState<boolean>(false);

  const handlePasswordVisible = () => {
    setControlPasswordVisible(!controlPasswordVisible);
  };

  const handleCoupangLogin = async (formData: FormData) => {
    try {
      const email = String(formData.get('useremail'));
      const password = String(formData.get('userpassword'));

      const data = await pb
        .collection('users')
        .getFirstListItem(`email=${email}`);
      alert('환영합니다!');
    } catch (err) {
      alert('비정상적인 접근입니다');
    }
  };

  return (
    <form className="CoupangForm" action={handleCoupangLogin}>
      <button type="button" aria-label="쿠팡 홈으로" className="homeBtn">
        <img src="src/CoupangLogo.svg" className="coupangLogo" alt="" />
      </button>
      <CoupangInput
        placeholder="아이디(이메일)"
        type="text"
        label="아이디 또는 이메일"
        name="useremail"
      ></CoupangInput>
      <CoupangInput
        placeholder="비밀번호"
        type="password"
        label="비밀번호"
        isPasswordVisible={controlPasswordVisible}
        onClick={handlePasswordVisible}
        name="userpassword"
      ></CoupangInput>
      <div className="login-option">
        <div className="auto-login">
          <input type="checkbox" id="auto-login" />
          <label htmlFor="auto-login">자동 로그인</label>
        </div>
        <a href="/">
          아이디(이메일)/비밀번호 찾기
          <img src="src/findRegister.svg" alt=""></img>
        </a>
      </div>
      <CoupangButton label="로그인" type="submit" color="blue"></CoupangButton>
      <hr
        style={{
          border: '1px solid #CCCCCC',
          width: '30vw',
          marginBlock: '1.375rem',
        }}
      />
      <CoupangButton
        label="회원가입"
        type="button"
        color="basic"
      ></CoupangButton>
    </form>
  );
}
