import { ComponentProps, useId } from 'react';

// 부모에게서 비밀번호의 노출 여부를 결정하는 boolean값을 받아오도록 설정
// 그리고 제어하는 함수도 부모에게서 할당
// error를 통해 이메일 validation에러를 표시
type CoupangInputType = ComponentProps<'input'> & {
  label: string;
  isPasswordVisible?: boolean;
  onClick?: () => void;
  error?: boolean;
};

export default function CoupangInput({
  label,
  isPasswordVisible,
  error,
  onClick,
  ...restProps
}: CoupangInputType) {
  const inputId = useId();

  return (
    <div className="coupangInputContainer">
      {/* input태그는 있으나 label은 화면상 보이지 않아 sr-only로 처리(스크린 리더가 읽을 수 있도록) */}
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      {/* type에 따라 렌더링 다르게 표시  */}
      {restProps.type !== 'password' ? (
        <>
          <input
            className={`coupangInput ${error ? 'errorMessage' : ''}`.trim()}
            id={inputId}
            type={restProps.type}
            {...restProps}
          />
          <p
            hidden={!error}
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              marginInlineStart: '0.75rem',
              color: '#e52528',
              lineHeight: 'normal',
              marginBlockStart: '-0.625rem',
              marginBlockEnd: '1rem',
            }}
          >
            아이디(이메일)는 이메일 형식으로 입력해주세요.
          </p>
        </>
      ) : (
        <input
          className="coupangInput"
          id={inputId}
          {...restProps}
          type={isPasswordVisible ? 'text' : 'password'}
        />
      )}

      {/* type에 따라 input태그 왼쪽에 있는 이미지를 다르게 설정 */}
      {/* 이미지의 정보는 읽을 필요 없다 생각해 alt텍스트를 공백으로 표기 */}
      {restProps.type !== 'password' ? (
        <img src="src/emailIcon.svg" alt="" />
      ) : (
        <>
          <img src="src/passwordIcon.svg" alt="" />
          {/* 버튼에 이벤트를 할당해 비밀번호의 타입 변경 */}
          <button type="button" className="show-password" onClick={onClick}>
            {isPasswordVisible ? (
              <img src="src/non-visible.svg" alt="" />
            ) : (
              <img src="src/visible.svg" />
            )}
          </button>
        </>
      )}
    </div>
  );
}
