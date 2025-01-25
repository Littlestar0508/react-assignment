import FormInput from './FormInput';
import '../styles/components/SignUpIn.css';
import SubmitButton from './SubmitButton';

export default function SignIn() {
  return (
    <form id="sign-in-form">
      <FormInput label="이메일" placeholder="user@company.io" type="email" />
      <FormInput
        label="패스워드"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        type="password"
      ></FormInput>
      <SubmitButton label="로그인" type="submit" />
    </form>
  );
}
