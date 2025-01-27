import '../../styles/components/SignUpIn.css';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import PocketBase from 'pocketbase';

// PocketBase를 통한 통신 구성
const END_POINT = 'https://teamproject.pockethost.io';

const pb = new PocketBase(END_POINT);

export default function SignUp() {
  const handleSignUp = async (formData: FormData) => {
    try {
      const [signupname, signupemail, signuppwd, signuppwdchk] =
        formData.getAll('signupform');

      if (!signupname || !signupemail || !signuppwd || !signuppwdchk) {
        alert('모두 작성해주시기 바랍니다');
        return;
      }

      if (signuppwd !== signuppwdchk) {
        alert('비밀번호를 다시 확인해주시기 바랍니다');
        return;
      }

      const signUpData = {
        password: String(signuppwd),
        passwordConfirm: String(signuppwdchk),
        name: String(signupname),
        email: String(signupemail),
        userid: 'test',
        emailVisibility: true,
        address: 'test',
        phoneNumber: 1046784518,
        birth: '',
        gender: ['male'],
      };

      await pb.collection('users').create(signUpData);
      alert('회원가입이 완료되었습니다');
    } catch (err) {
      alert('올바르지 않은 통신입니다');
    }
  };

  return (
    <form id="sign-up-form" action={handleSignUp}>
      <FormInput
        label="이름"
        placeholder="2글자 이상 입력"
        type="text"
        name="signupform"
      ></FormInput>
      <FormInput
        label="이메일"
        type="email"
        placeholder="user@company.io"
        name="signupform"
      ></FormInput>
      <FormInput
        label="패스워드"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        type="password"
        name="signupform"
      ></FormInput>
      <FormInput
        label="패스워드 확인"
        placeholder="입력한 패스워드 다시 입력"
        type="password"
        name="signupform"
      ></FormInput>
      <SubmitButton label="회원가입" type="submit" />
    </form>
  );
}
