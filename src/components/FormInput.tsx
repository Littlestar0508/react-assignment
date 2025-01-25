import { ComponentProps, useId } from 'react';
import '../styles/components/FormInput.css';

type FormInputType = ComponentProps<'input'> & {
  label: string;
  placeholder?: string;
};

export default function FormInput({ label, ...restProps }: FormInputType) {
  const inputId = useId();

  return (
    <div className="input-container">
      <label htmlFor={inputId}>{label}</label>
      <input type="text" {...restProps} id={inputId} />
    </div>
  );
}
