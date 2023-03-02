import type { UseDismissProps } from '@floating-ui/react';

export type colors = 'white' | 'gray' | 'yellow' | 'green' | 'blue' | 'red' | 'purple';

export type offset =
  | number
  | { maxAxis?: number; crossAxis?: number; alignmentAxis?: number | null };
export type dismiss = UseDismissProps;
export type animation = {
  initial?: object;
  mount?: object;
  unmount?: object;
};
