import { ComponentProps } from 'react';
import '../../styles/components/SubmitButton.css';

// 버튼 태그 속성만 props로 전달받기 위한 ComponentProps
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
