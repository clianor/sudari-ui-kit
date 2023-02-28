import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import type { color, size, variant } from '../../components/Button/type';
import { rounded } from '../../components/IconButton/type';
import filled from '../button/variants/filled';
import outlined from '../button/variants/outlined';
import text from '../button/variants/text';

export interface ButtonStyleTypes {
  defaultProps: {
    variant: variant;
    size: size;
    color: color;
    borderRadius: rounded;
  };
  styles: {
    base: {
      initial: CSSInterpolation;
    };
    variants: { [key in variant]: { [colorKey in color]: CSSInterpolation } };
    sizes: { [key in size]: CSSInterpolation };
    rounded: { [key in rounded]: CSSInterpolation };
  };
}

const button: ButtonStyleTypes = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'green',
    borderRadius: 'lg',
  },
  styles: {
    base: {
      initial: [
        tw`select-none`,
        tw`font-sans font-bold text-center align-middle`,
        tw`disabled:(opacity-50 shadow-none pointer-events-none)`,
      ],
    },
    variants: {
      filled,
      outlined,
      text,
    },
    sizes: {
      sm: [tw`h-8`, tw`text-xs`, tw`p-2`],
      md: [tw`h-10`, tw`text-xs`, tw`p-3`],
      lg: [tw`h-12`, tw`text-sm`, tw`p-3.5`],
    },
    rounded: {
      none: [tw`rounded-none`],
      sm: [tw`rounded-sm`],
      md: [tw`rounded-md`],
      lg: [tw`rounded-lg`],
      full: [tw`rounded-full`],
    },
  },
};

export default button;
