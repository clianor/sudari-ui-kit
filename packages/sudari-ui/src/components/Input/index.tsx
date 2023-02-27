import { InputHTMLAttributes, forwardRef } from 'react';

import { useTheme } from '../../context/theme';
import { variant } from './type';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked'> {
  variant?: variant;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, variant, label, ...props }, ref) => {
    // init
    const { input } = useTheme();
    const { defaultProps, styles } = input;
    const { base, variants } = styles;

    // set default props
    placeholder = placeholder ?? defaultProps.placeholder;
    variant = variant ?? defaultProps.variant;

    // set styles
    const containerStyle = [base.container, variants[variant].container];
    const inputStyle = [base.input, variants[variant].input];
    const labelStyle = [base.label, variants[variant].label];

    return (
      <div className={className} css={containerStyle}>
        <input {...props} ref={ref} className="peer" placeholder={placeholder} css={inputStyle} />
        <label css={labelStyle}>{label}</label>
      </div>
    );
  },
);
Input.displayName = 'Input';
