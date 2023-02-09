import * as React from "react";
import "twin.macro";
import { useTheme } from "../../context/theme";
import { size } from "./type";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size;
}

export const Button: React.FC<ButtonProps> = ({ size, ...rest }) => {
  // init
  const { button } = useTheme();
  const { defaultProps, styles } = button;
  const { base, sizes } = styles;

  // set default props
  size = size ?? defaultProps.size;

  const baseStyles = base.initial;
  const buttonSizeStyle = sizes[size];

  return (
    <button
      {...rest}
      // tw="text-green-800 bg-green-200 px-4 py-2 hover:(text-green-900 bg-green-300)"
      css={[baseStyles, buttonSizeStyle]}
    />
  );
};
