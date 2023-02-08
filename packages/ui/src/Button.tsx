import * as React from "react";
import "twin.macro";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      tw="text-green-800 bg-green-200 px-4 py-2 hover:(text-green-900 bg-green-300)"
      {...rest}
    >
      {label}
    </button>
  );
};
