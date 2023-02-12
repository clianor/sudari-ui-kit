import { CheckIcon } from 'icons';
import { InputHTMLAttributes, forwardRef } from 'react';
import 'twin.macro';

import { useTheme } from '../../context/theme';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...rest }, ref) => {
  // init
  const { checkbox } = useTheme();
  const { defaultProps, styles } = checkbox;
  const { base } = styles;

  // set default props

  // set styles
  const containerStyle = base.container;
  const inputStyle = base.input;
  const iconStyle = base.icon;
  const labelStyle = base.label;

  return (
    <label css={containerStyle}>
      <input ref={ref} className="peer" type="checkbox" css={[inputStyle]} {...rest} />
      <div css={iconStyle}>
        <CheckIcon />
      </div>
      {label && <span css={labelStyle}>{label}</span>}
    </label>
  );
});
Checkbox.displayName = 'Checkbox';
