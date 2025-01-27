import '../../styles/components/CoupangLogin.css';
import CoupangInput from './CoupangInput';
import CoupangButton from './CoupangButton';

export default function CoupangLogin() {
  return (
    <form className="CoupangForm">
      <img
        src="src/CoupangLogo.png"
        className="coupangLogo"
        alt="쿠팡 홈으로"
      />
      <CoupangInput></CoupangInput>
      <CoupangButton></CoupangButton>
      <input type="text" placeholder="테스트" className="test" />
    </form>
  );
}
