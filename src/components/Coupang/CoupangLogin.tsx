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
  const [buttonActivate, setButtonActivate] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [saveLogin, setSaveLogin] = useState<boolean>(true);

  const handlePasswordVisible = () => {
    setControlPasswordVisible(!controlPasswordVisible);
  };

  const handleCoupangLogin = async (formData: FormData) => {
    setErrorEmail(false);
    try {
      const email = String(formData.get('useremail'));
      const password = String(formData.get('userpassword'));

      const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

      if (!regEmail.test(email)) {
        setErrorEmail(true);
        return;
      }

      const data = await pb
        .collection('users')
        .getFirstListItem(`email="${email}"`);
      alert(`환영합니다! ${data.name}님!`);
      // 페이지 이동을 해야되지만 현재 구현한 페이지가 없어 버튼을 원래의 상태로 되돌리는 작업
      setButtonActivate(false);
    } catch (err) {
      alert('비정상적인 접근입니다');
    }
  };

  const handleButtonActivate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.coupangInput');
    if (list[0].value.length > 0 && list[1].value.length > 0) {
      setButtonActivate(true);
    } else {
      setButtonActivate(false);
    }
  };

  return (
    <form className="CoupangForm" action={handleCoupangLogin}>
      <button type="button" aria-label="쿠팡 홈으로" className="homeBtn">
        <img src="src/CoupangLogo.svg" className="coupangLogo" alt="" />
      </button>
      <CoupangInput
        error={errorEmail}
        placeholder="아이디(이메일)"
        type="text"
        label="아이디 또는 이메일"
        name="useremail"
        onChange={handleButtonActivate}
      ></CoupangInput>
      <CoupangInput
        placeholder="비밀번호"
        type="password"
        label="비밀번호"
        isPasswordVisible={controlPasswordVisible}
        onClick={handlePasswordVisible}
        onChange={handleButtonActivate}
        name="userpassword"
      ></CoupangInput>
      <div className="login-option">
        <div className="auto-login">
          <input
            type="checkbox"
            id="auto-login"
            defaultChecked={!saveLogin}
            onChange={() => setSaveLogin(!saveLogin)}
          />
          <label htmlFor="auto-login">자동 로그인</label>
        </div>
        <a href="/">
          아이디(이메일)/비밀번호 찾기
          <img src="src/findRegister.svg" alt=""></img>
        </a>
      </div>
      <div className="saveLoginInfo" hidden={saveLogin}>
        <div></div>
        <p>개인 정보 보호를 위해 본인 기기에서만 이용해주세요</p>
      </div>
      <CoupangButton
        label="로그인"
        type="submit"
        color="blue"
        disabled={!buttonActivate}
      ></CoupangButton>
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
