import '../../styles/components/CoupangLogin.css';
import CoupangInput from './CoupangInput';
import CoupangButton from './CoupangButton';
import { useState } from 'react';
import PocketBase from 'pocketbase';

const END_POINT = 'https://teamproject.pockethost.io';

const pb = new PocketBase(END_POINT);

export default function CoupangLogin() {
  // 비밀번호 노출 여부
  const [controlPasswordVisible, setControlPasswordVisible] =
    useState<boolean>(false);
  // 버튼 활성화 표시 여부
  const [buttonActivate, setButtonActivate] = useState<boolean>(false);
  // 이메일 validation 표시 여부
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  // 자동 로그인 체크 확인
  const [saveLogin, setSaveLogin] = useState<boolean>(true);

  const handlePasswordVisible = () => {
    setControlPasswordVisible(!controlPasswordVisible);
  };

  const handleCoupangLogin = async (formData: FormData) => {
    // 항상 폼에 제출 시 이메일 validation을 초기화하고 검사
    setErrorEmail(false);
    try {
      // 원래는 email과 password로 login을 구현하려 했지만 email verify의 문제로 실패
      const email = String(formData.get('useremail'));
      const password = String(formData.get('userpassword'));

      // 이메일 정규 표현식([(문자+숫자)열]@[(문자+숫자)열].[문자열2자리 이상])
      const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

      // 만약 정규표현식을 통과하지 못했다면 error의 여부를 true로 바꾸고 함수 종료
      if (!regEmail.test(email)) {
        setErrorEmail(true);
        return;
      }

      // formData에서 받아온 email로 통신
      const data = await pb
        .collection('users')
        .getFirstListItem(`email="${email}"`);
      alert(`환영합니다! ${data.name}님!`);
      // 페이지 이동을 해야되지만 현재 구현한 페이지가 없어 버튼을 원래의 상태로 되돌리는 작업
      setButtonActivate(false);
    } catch (err) {
      // 통신 실패 혹은 이메일 존재X
      alert('비정상적인 접근입니다');
    }
  };

  const handleButtonActivate = () => {
    // list에 coupang UI에서 사용되는 input 태그들의 값을 저장하기 위한 list
    const list: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.coupangInput');

    // 두 값의 길이가 모두 0 초과라면 버튼 활성화
    if (list[0].value.length > 0 && list[1].value.length > 0) {
      setButtonActivate(true);
    } else {
      // 아니라면 버튼 비활성화
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
        {/* 링크 이동X */}
        <a href="/">
          아이디(이메일)/비밀번호 찾기
          <img src="src/findRegister.svg" alt=""></img>
        </a>
      </div>
      {/* 자동 로그인 안내 메세지 */}
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
      {/* 구분선 */}
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
