import { FC } from 'react';
import 'twin.macro';

export const CheckIcon: FC<IconType> = (props) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    tw="block"
    {...props}
  >
    <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
  </svg>
);
