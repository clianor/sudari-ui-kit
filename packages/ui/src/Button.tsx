import * as React from "react";
import tw, { css } from "twin.macro";

export interface ButtonProps {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button tw="text-green-800 bg-green-200 px-4 py-2">{label}</button>;
};
