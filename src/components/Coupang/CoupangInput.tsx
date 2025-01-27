import { ComponentProps, useId } from 'react';

type CoupangInputType = ComponentProps<'input'> & {
  label: string;
  isPasswordVisible?: boolean;
  onClick?: () => void;
};

export default function CoupangInput({
  label,
  isPasswordVisible,
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
        <input
          className="coupangInput"
          id={inputId}
          type={restProps.type}
          {...restProps}
        />
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
