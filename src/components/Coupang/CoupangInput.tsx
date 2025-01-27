import { ComponentProps, useId } from 'react';

type CoupangInputType = ComponentProps<'input'> & {
  label: string;
};

export default function CoupangInput({
  label,
  ...restProps
}: CoupangInputType) {
  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input className="coupangInput" id={inputId} {...restProps} />
    </>
  );
}
