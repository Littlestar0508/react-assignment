import FormInput from './FormInput';
import '../styles/components/SignUpIn.css';
import SubmitButton from './SubmitButton';
import PocketBase from 'pocketbase';

// PocketBase를 통한 통신 구성
const END_POINT = 'https://teamproject.pockethost.io';

const pb = new PocketBase(END_POINT);

export default function SignIn() {
  // PocketBase로 이메일만 통신(비밀번호 체크X)
  const handleLogin = async (formData: FormData) => {
    try {
      const email = formData.get('useremail')?.toString();
      const password = formData.get('userpassword')?.toString();

      if (!email || !password) {
        alert('경고');
        return;
      }
      // 정상적인 통신을 하였다면 data에 통신 값을 저장
      const data = await pb
        .collection('users')
        .getFirstListItem(`email = "${email}"`);

      // 이메일을 통한 auth인증 실패 코드
      // const authData = await pb
      //   .collection('users')
      //   .authWithPassword(email, password);
      // console.log(authData);

      alert(`${data.name}님 환영합니다!`);
    } catch (err) {
      // 정상적인 통신이 되지 않았다면 에러를 alert 창으로 경고 (비밀번호 체크X 이메일만 체크)
      alert('등록되지 않은 이메일 혹은 일치하지 않는 비밀번호입니다');
    }
  };

  return (
    <form id="sign-in-form" action={handleLogin}>
      <FormInput
        label="이메일"
        placeholder="user@company.io"
        type="email"
        name="useremail"
      />
      <FormInput
        label="패스워드"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        type="password"
        name="userpassword"
      ></FormInput>
      <SubmitButton label="로그인" type="submit" />
    </form>
  );
}
