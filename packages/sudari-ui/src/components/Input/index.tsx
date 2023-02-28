import { InputHTMLAttributes, forwardRef } from 'react';

import { useTheme } from '../../context/theme';
import type { color, size, variant } from './type';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked'> {
  variant?: variant;
  size?: size;
  color?: color;
  label?: string;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, variant, size, color, label, error, ...props }, ref) => {
    // init
    const { input } = useTheme();
    const { defaultProps, styles } = input;
    const { base, variants, colors, sizes, errors } = styles;

    // set default props
    placeholder = placeholder ?? defaultProps.placeholder;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    variant = variant ?? defaultProps.variant;
    error = error ?? defaultProps.error;

    // set styles
    const containerStyle = [
      base.container,
      sizes[size].container,
      variants[variant].container,
      colors[color].container,
      error && errors.container,
    ];
    const inputStyle = [
      base.input,
      sizes[size].input,
      variants[variant].input,
      colors[color].input,
      error && errors.input,
    ];
    const labelStyle = [
      base.label,
      sizes[size].label,
      variants[variant].label,
      colors[color].label,
      error && errors.label,
    ];

    return (
      <div className={className} css={containerStyle}>
        <input {...props} ref={ref} className="peer" placeholder={placeholder} css={inputStyle} />
        <label css={labelStyle}>{label}</label>
      </div>
    );
  },
);
Input.displayName = 'Input';
