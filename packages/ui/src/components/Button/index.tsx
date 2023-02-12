import { ButtonHTMLAttributes, FC } from 'react';
import 'twin.macro';

import { useTheme } from '../../context/theme';
import { color, size, variant } from './type';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'placeholder'> {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ variant, size, color, fullWidth, ...rest }) => {
  // init
  const { button } = useTheme();
  const { defaultProps, styles } = button;
  const { base, variants, sizes } = styles;

  // set default props
  variant = variant ?? defaultProps.variant;
  size = size ?? defaultProps.size;
  color = color ?? defaultProps.color;
  fullWidth = fullWidth ?? defaultProps.fullWidth;

  // set styles
  const baseStyles = base.initial;
  const fullWidthStyles = base.fullWidth;
  const buttonVariantStyles = variants[variant][color];
  const buttonSizeStyle = sizes[size];

  return (
    <button
      {...rest}
      css={[baseStyles, fullWidth && fullWidthStyles, buttonVariantStyles, buttonSizeStyle]}
    />
  );
};
