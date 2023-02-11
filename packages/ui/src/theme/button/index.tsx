import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import type { color, size, variant } from '../../components/Button/type';
import filled from './variants/filled';
import outlined from './variants/outlined';
import text from './variants/text';

export interface ButtonStyleTypes {
  defaultProps: {
    variant: variant;
    size: size;
    color: color;
  };
  styles: {
    base: {
      initial: CSSInterpolation;
    };
    variants: { [key in variant]: { [key in color]: CSSInterpolation } };
    sizes: { [key in size]: CSSInterpolation };
  };
}

const button: ButtonStyleTypes = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'green',
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
      sm: [tw`text-xs`, tw`px-4 py-2`, tw`rounded-lg`],
      md: [tw`text-xs`, tw`px-6 py-3`, tw`rounded-lg`],
      lg: [tw`text-sm`, tw`py-3.5 px-7`, tw`rounded-lg`],
    },
  },
};

export default button;
