import { ComponentProps, useId } from 'react';

interface FormInputType {
  label: string;
  placeholder?: string;
}

export default function FormInput({ label, ...restProps }: FormInputType) {
  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input type="text" {...restProps} id={inputId} />
    </>
  );
}
