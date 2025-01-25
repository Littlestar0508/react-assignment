import FormInput from './FormInput';
import '../styles/components/SignUpIn.css';

export default function SignUp() {
  return (
    <form id="sign-up-form">
      <FormInput
        label="이름"
        placeholder="2글자 이상 입력"
        type="text"
      ></FormInput>
      <FormInput
        label="이메일"
        type="email"
        placeholder="user@company.io"
      ></FormInput>
      <FormInput
        label="패스워드"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        type="password"
      ></FormInput>
      <FormInput
        label="패스워드 확인"
        placeholder="입력한 패스워드 다시 입력"
        type="password"
      ></FormInput>
    </form>
  );
}
