import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import { size, variant } from '../../components/Input/type';
import inputOutlined from './variants/inputOutlined';
import inputStandard from './variants/inputStandard';
import inputStatic from './variants/inputStatic';

type Elements = 'container' | 'input' | 'label';

export interface InputStyleTypes {
  defaultProps: {
    placeholder: string;
    size: size;
    variant: variant;
  };
  styles: {
    base: {
      [key in Elements]: CSSInterpolation;
    };
    variants: {
      [key in variant]: {
        [key in Elements]: CSSInterpolation;
      };
    };
    sizes: {
      [key in size]: {
        [key in Elements]: CSSInterpolation;
      };
    };
  };
}

const input: InputStyleTypes = {
  defaultProps: {
    placeholder: ' ',
    size: 'md',
    variant: 'outlined',
  },
  styles: {
    base: {
      container: tw`relative w-full min-w-[200px]`,
      input: [
        tw`w-full h-full`,
        tw`m-0`,
        tw`bg-transparent`,
        tw`text-slate-700`,
        tw`outline outline-0 focus:outline-0`,
      ],
      label: [
        tw`absolute left-0`,
        tw`w-full h-full`,
        tw`flex`,
        tw`pointer-events-none select-none`,
      ],
    },
    variants: {
      outlined: inputOutlined,
      standard: inputStandard,
      static: inputStatic,
    },
    sizes: {
      sm: {
        container: [tw`h-8`, tw`text-sm`],
        input: [],
        label: [
          tw`peer-placeholder-shown:(text-sm leading-[2.75rem])`,
          tw`text-xs leading-[1rem]`,
          tw`peer-focus:(text-xs leading-[1rem])`,
        ],
      },
      md: {
        container: [tw`h-10`, tw`text-base`],
        input: [],
        label: [
          tw`peer-placeholder-shown:(text-base leading-[3.25rem])`,
          tw`text-sm leading-[1rem]`,
          tw`peer-focus:(text-sm leading-[1rem])`,
        ],
      },
      lg: {
        container: [tw`h-12`, tw`text-lg`],
        input: [],
        label: [
          tw`peer-placeholder-shown:(text-lg leading-[3.75rem])`,
          tw`text-base leading-[1rem]`,
          tw`peer-focus:(text-base leading-[1rem])`,
        ],
      },
    },
  },
};

export default input;
