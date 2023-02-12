import { FC } from 'react';

import { IconType } from '../types/IconType';

export const MinusIcon: FC<IconType> = (props) => {
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
      <path d="M0 10h24v4h-24z" />
    </svg>
  );
};
