import * as React from "react";
import { css } from "@emotion/react";

export interface ButtonProps {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      css={css`
        color: red;
      `}
    >
      {label}
    </button>
  );
};
