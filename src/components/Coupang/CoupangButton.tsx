import { ComponentProps } from 'react';

// button 태그와 상황에 따라 색상을 결정하는 color를 추가적으로 props의 속성으로 지정한다
type CoupangButtonType = ComponentProps<'button'> & {
  label: string;
  color: string;
};

export default function CoupangButton({
  label,
  color,
  ...restProps
}: CoupangButtonType) {
  return (
    <>
      <button
        type="button"
        // color의 값에 따라 className을 다르게 설정
        className={
          color === 'basic' ? 'btn--gray coupangBtn' : 'btn--blue coupangBtn'
        }
        {...restProps}
      >
        {label}
      </button>
    </>
  );
}
