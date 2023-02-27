import { FC } from 'react';

export const CircleIcon: FC<IconType> = (props) => {
  return (
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
};
