import { CircleIcon } from '@sudari/icons';

import clsx from 'clsx';
import { forwardRef } from 'react';

import { useTheme } from '../../context/theme';
import { CheckboxProps } from '../Checkbox';

export type RadioProps = Omit<CheckboxProps, 'indeterminate' | 'indeterminateIcon'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ size, color, disabled, icon, ...props }, ref) => {
    // init
    const { radio } = useTheme();
    const { defaultProps, styles } = radio;
    const { base } = styles;

    // set default props
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    icon = icon || <CircleIcon />;

    // set styles
    const containerStyle = base.container;
    const sizeStyle = base.sizes[size];
    const inputStyle = base.input;
    const iconStyle = base.icon[color];

    return (
      <label className={clsx(disabled && 'disabled')} css={containerStyle}>
        <input
          ref={ref}
          className="peer"
          type="radio"
          disabled={disabled}
          css={[inputStyle]}
          {...props}
        />
        <div css={[sizeStyle, iconStyle]}>{icon}</div>
      </label>
    );
  },
);
Radio.displayName = 'Radio';
