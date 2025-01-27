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
      <input
        className="coupangInput"
        id={inputId}
        type={restProps.type}
        {...restProps}
      />
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
