import FormInput from './FormInput';
import '../styles/components/SignUpIn.css';

export default function SignUp() {
  return (
    <form id="sign-up-form">
      <FormInput label="이메일" placeholder="입력 바람"></FormInput>
    </form>
  );
}
