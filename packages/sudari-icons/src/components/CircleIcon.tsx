import { FC } from 'react';

import { IconType } from '../types/iconType';

export const CircleIcon: FC<IconType> = (props) => (
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
    {...props}
  >
    <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
  </svg>
);
