import { ComponentProps, useId, useState } from 'react';
import '../../styles/components/FormInput.css';
import ShowPwdOnOff from './ShowPwdOnOff';

// input태그에서 사용되는 속성만 props로 전달받기 위해 ComponentProps사용
type FormInputType = ComponentProps<'input'> & {
  label: string;
  placeholder?: string;
};

export default function FormInput({ label, ...restProps }: FormInputType) {
  // 비밀번호 아이콘 클릭 시 type 변경하는 useState
  const [visible, setVisible] = useState(false);
  const inputId = useId();
  // password 타입이라면 icon을 렌더링 하기 위한 변수
  let isPasswordType: boolean;

  if (restProps.type === 'password') {
    isPasswordType = true;
  } else {
    isPasswordType = false;
  }

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="input-container">
      <label htmlFor={inputId} className="signUpInLabel">
        {label}
      </label>
      <div className="input-field">
        {/* type['password']에 따라 조건부 렌더링 */}
        {isPasswordType ? (
          <>
            <input
              {...restProps}
              id={inputId}
              type={visible ? 'text' : 'password'}
              className="SignUpInInput"
            />
            <button
              className="control-visible"
              aria-label="비밀번호 보기"
              type="button"
              onClick={handleVisible}
            >
              <ShowPwdOnOff />
            </button>
          </>
        ) : (
          <input {...restProps} id={inputId} className="SignUpInInput" />
        )}
      </div>
    </div>
  );
}
