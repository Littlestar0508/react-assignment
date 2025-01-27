import { ComponentProps } from 'react';

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
