import { ComponentProps } from 'react';
import '../../styles/components/SubmitButton.css';

type SubmitButtonType = ComponentProps<'button'> & {
  label: string;
};

export default function SubmitButton({
  label,
  ...restProps
}: SubmitButtonType) {
  return (
    <button className="submit-form" {...restProps}>
      {label}
    </button>
  );
}
