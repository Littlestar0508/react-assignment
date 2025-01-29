import '../../styles/components/SignUpIn.css';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import pb from '../../lib/pocketbase';

// PocketBase를 통한 통신 구성

export default function SignUp() {
  const handleSignUp = async (formData: FormData) => {
    try {
      // formData에서 signupform data를 가져와서 구조분해 할당
      const [signupname, signupemail, signuppwd, signuppwdchk] =
        formData.getAll('signupform');

      // 만약 모두 입력하지 않았다면 통신X
      if (!signupname || !signupemail || !signuppwd || !signuppwdchk) {
        alert('모두 작성해주시기 바랍니다');
        return;
      }

      // 비밀번호가 일치하지 않는다면 통신X
      if (signuppwd !== signuppwdchk) {
        alert('비밀번호를 다시 확인해주시기 바랍니다');
        return;
      }

      // 회원가입 데이터
      const signUpData = {
        // formData
        password: signuppwd,
        passwordConfirm: signuppwdchk,
        name: signupname,
        email: signupemail,
        // dummy data
        userid: 'test',
        emailVisibility: true,
        address: 'test',
        phoneNumber: 1046784518,
        birth: '',
        gender: ['male'],
      };

      await pb.collection('users').create(signUpData);
      alert('회원가입이 완료되었습니다');
    } catch {
      alert('올바르지 않은 통신입니다');
    }
  };

  return (
    // React19 form[action] 을 통한 작동
    <form id="sign-up-form" action={handleSignUp} className="SignUpIn">
      <FormInput
        label="이름"
        placeholder="2글자 이상 입력"
        type="text"
        name="signupform"
      />
      <FormInput
        label="이메일"
        type="email"
        placeholder="user@company.io"
        name="signupform"
      />
      <FormInput
        label="패스워드"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        type="password"
        name="signupform"
      />
      <FormInput
        label="패스워드 확인"
        placeholder="입력한 패스워드 다시 입력"
        type="password"
        name="signupform"
      />
      <SubmitButton label="회원가입" type="submit" />
    </form>
  );
}
