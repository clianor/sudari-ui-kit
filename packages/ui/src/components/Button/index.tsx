import * as React from "react";
import "twin.macro";
import { useTheme } from "../../context/theme";
import { size, variant } from "./type";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  size?: size;
}

export const Button: React.FC<ButtonProps> = ({ variant, size, ...rest }) => {
  // init
  const { button } = useTheme();
  const { defaultProps, styles } = button;
  const { base, variants, sizes } = styles;

  // set default props
  variant = variant ?? defaultProps.variant;
  size = size ?? defaultProps.size;

  const baseStyles = base.initial;
  const buttonVariantStyles = variants[variant];
  const buttonSizeStyle = sizes[size];

  return (
    <button
      {...rest}
      css={[baseStyles, buttonVariantStyles, buttonSizeStyle]}
    />
  );
};
