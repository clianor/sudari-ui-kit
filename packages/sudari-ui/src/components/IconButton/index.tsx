import { FC, ReactNode } from 'react';

import { useTheme } from '../../context/theme';
import { ButtonProps } from '../Button';
import type { rounded } from './type';

export interface IconButtonProps extends Omit<ButtonProps, 'fullWidth' | 'children'> {
  icon?: ReactNode;
  borderRadius?: rounded;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  variant,
  size,
  color,
  borderRadius,
  ...props
}) => {
  // init
  const { iconButton } = useTheme();
  const { defaultProps, styles } = iconButton;
  const { base, variants, sizes, rounded } = styles;

  // set default props
  variant = variant ?? defaultProps.variant;
  size = size ?? defaultProps.size;
  color = color ?? defaultProps.color;
  borderRadius = borderRadius ?? defaultProps.borderRadius;

  // set styles
  const baseStyles = base.initial;
  const buttonVariantStyles = variants[variant][color];
  const buttonSizeStyle = sizes[size];
  const buttonRoundedStyle = rounded[borderRadius];

  return (
    <button {...props} css={[baseStyles, buttonVariantStyles, buttonSizeStyle, buttonRoundedStyle]}>
      {icon}
    </button>
  );
};
