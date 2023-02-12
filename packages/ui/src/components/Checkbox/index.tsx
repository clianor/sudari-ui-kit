import { forwardRef } from 'react';

import { useTheme } from '../../context/theme';

export interface CheckboxProps {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  // init
  const {} = useTheme();

  return <input ref={ref} />;
});
Checkbox.displayName = 'Checkbox';
