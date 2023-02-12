import clsx from 'clsx';
import { CheckIcon } from 'icons';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import 'twin.macro';

import { useTheme } from '../../context/theme';
import { color } from './type';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'> {
  label?: string;
  icon?: ReactNode;
  color?: color;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, color, disabled, icon, ...rest }, ref) => {
    // init
    const { checkbox } = useTheme();
    const { defaultProps, styles } = checkbox;
    const { base } = styles;

    // set default props
    color = color ?? defaultProps.color;

    // set styles
    const containerStyle = base.container;
    const inputStyle = base.input;
    const iconStyle = base.icon[color];
    const labelStyle = base.label;

    return (
      <label className={clsx(disabled && 'disabled')} css={containerStyle}>
        <input
          ref={ref}
          className="peer"
          type="checkbox"
          disabled={disabled}
          css={[inputStyle]}
          {...rest}
        />
        <div css={iconStyle}>{icon || <CheckIcon />}</div>
        {label && <span css={labelStyle}>{label}</span>}
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';
