import { ComponentProps, useId } from 'react';

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
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
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

      {restProps.type !== 'password' ? (
        <img src="src/emailIcon.svg" alt="" />
      ) : (
        <>
          <img src="src/passwordIcon.svg" alt="" />
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
