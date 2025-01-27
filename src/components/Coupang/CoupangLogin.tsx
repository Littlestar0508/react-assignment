import '../../styles/components/CoupangLogin.css';
import CoupangInput from './CoupangInput';
import CoupangButton from './CoupangButton';

export default function CoupangLogin() {
  return (
    <form className="CoupangForm">
      <button type="button" aria-label="쿠팡 홈으로" className="homeBtn">
        <img src="src/CoupangLogo.svg" className="coupangLogo" alt="" />
      </button>
      <CoupangInput
        placeholder="아이디(이메일)"
        type="text"
        label="아이디 또는 이메일"
      ></CoupangInput>
      <CoupangInput
        placeholder="비밀번호"
        type="password"
        label="비밀번호"
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
