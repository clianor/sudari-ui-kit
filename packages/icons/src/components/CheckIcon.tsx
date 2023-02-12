import { FC } from 'react';

import { IconType } from '../types/IconType';

export const CheckIcon: FC<IconType> = (props) => {
  return (
    <svg
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
    </svg>
  );
};
