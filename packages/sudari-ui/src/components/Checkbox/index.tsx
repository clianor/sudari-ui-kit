import { CheckIcon, MinusIcon } from '@sudari/icons';

import clsx from 'clsx';
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import 'twin.macro';

import { useTheme } from '../../context/theme';
import type { color, size } from './type';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'placeholder'> {
  indeterminate?: boolean;
  indeterminateIcon?: ReactNode;
  icon?: ReactNode;
  size?: size;
  color?: color;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked, indeterminate, indeterminateIcon, size, color, disabled, icon, onChange, ...props },
    ref,
  ) => {
    const localRef = useRef<HTMLInputElement>(null);
    // init
    const { checkbox } = useTheme();
    const { defaultProps, styles } = checkbox;
    const { base } = styles;

    // set default props
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    icon = icon || <CheckIcon />;
    indeterminateIcon = indeterminateIcon || <MinusIcon />;

    // set styles
    const containerStyle = base.container;
    const sizeStyle = base.sizes[size];
    const inputStyle = base.input;
    const iconStyle = base.icon[color];

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (indeterminate) event.currentTarget.indeterminate = indeterminate;
        onChange?.(event);
      },
      [indeterminate, onChange],
    );

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
          checked={indeterminate ? false : checked}
          onChange={handleChange}
          css={[inputStyle]}
          {...props}
        />
        <div css={[sizeStyle, iconStyle]}>{indeterminate ? indeterminateIcon : icon}</div>
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';
