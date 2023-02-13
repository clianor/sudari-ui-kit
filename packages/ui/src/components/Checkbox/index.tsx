import clsx from 'clsx';
import { CheckIcon, MinusIcon } from 'icons';
import { InputHTMLAttributes, ReactNode, forwardRef, useEffect, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import 'twin.macro';

import { useTheme } from '../../context/theme';
import { color } from './type';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'> {
  label?: string;
  indeterminate?: boolean;
  indeterminateIcon?: ReactNode;
  icon?: ReactNode;
  color?: color;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, indeterminateIcon, color, disabled, icon, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement>(null);
    // init
    const { checkbox } = useTheme();
    const { defaultProps, styles } = checkbox;
    const { base } = styles;

    // set default props
    color = color ?? defaultProps.color;
    icon = icon || <CheckIcon />;
    indeterminateIcon = indeterminateIcon || <MinusIcon />;

    // set styles
    const containerStyle = base.container;
    const inputStyle = base.input;
    const iconStyle = base.icon[color];
    const labelStyle = base.label;

    useEffect(() => {
      if (indeterminate && localRef.current) {
        localRef.current.indeterminate = true;
      } else if (localRef.current) {
        localRef.current.indeterminate = false;
      }
    }, [indeterminate]);

    return (
      <label className={clsx(disabled && 'disabled')} css={containerStyle}>
        <input
          ref={mergeRefs([localRef, ref])}
          className="peer"
          type="checkbox"
          disabled={disabled}
          css={[inputStyle]}
          {...props}
        />
        <div css={iconStyle}>{indeterminate ? indeterminateIcon : icon}</div>
        {label && <span css={labelStyle}>{label}</span>}
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';
