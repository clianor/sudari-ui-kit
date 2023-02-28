import { InputHTMLAttributes, forwardRef } from 'react';

import { useTheme } from '../../context/theme';
import type { size, variant } from './type';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked'> {
  variant?: variant;
  size?: size;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, variant, size, label, ...props }, ref) => {
    // init
    const { input } = useTheme();
    const { defaultProps, styles } = input;
    const { base, variants, sizes } = styles;

    // set default props
    placeholder = placeholder ?? defaultProps.placeholder;
    size = size ?? defaultProps.size;
    variant = variant ?? defaultProps.variant;

    // set styles
    const containerStyle = [base.container, sizes[size].container, variants[variant].container];
    const inputStyle = [base.input, sizes[size].input, variants[variant].input];
    const labelStyle = [base.label, sizes[size].label, variants[variant].label];

    return (
      <div className={className} css={containerStyle}>
        <input {...props} ref={ref} className="peer" placeholder={placeholder} css={inputStyle} />
        <label css={labelStyle}>{label}</label>
      </div>
    );
  },
);
Input.displayName = 'Input';
