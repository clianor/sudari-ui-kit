import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import type { color, size, variant } from '../../components/Input/type';
import inputOutlined from './variants/inputOutlined';
import inputStandard from './variants/inputStandard';
import inputStatic from './variants/inputStatic';

type Elements = 'container' | 'input' | 'label';

export interface InputStyleTypes {
  defaultProps: {
    placeholder: string;
    size: size;
    color: color;
    variant: variant;
  };
  styles: {
    base: {
      [key in Elements]: CSSInterpolation;
    };
    variants: {
      [key in variant]: {
        [elementKey in Elements]: CSSInterpolation;
      };
    };
    colors: {
      [key in color]: {
        [elementKey in Elements]: CSSInterpolation;
      };
    };
    sizes: {
      [key in size]: {
        [elementKey in Elements]: CSSInterpolation;
      };
    };
    disables: {
      [key in Elements]: CSSInterpolation;
    };
    errors: {
      [key in Elements]: CSSInterpolation;
    };
  };
}

const input: InputStyleTypes = {
  defaultProps: {
    placeholder: ' ',
    size: 'md',
    color: 'green',
    variant: 'outlined',
  },
  styles: {
    base: {
      container: [tw`relative`, tw`w-full min-w-[200px]`],
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
    colors: {
      gray: {
        container: [],
        input: [tw`focus:(border-gray-500 border-t-transparent)`],
        label: [tw`peer-focus:(border-gray-500 text-gray-500)`],
      },
      yellow: {
        container: [],
        input: [tw`focus:(border-yellow-500 border-t-transparent)`],
        label: [tw`peer-focus:(border-yellow-500 text-yellow-500)`],
      },
      green: {
        container: [],
        input: [tw`focus:(border-green-500 border-t-transparent)`],
        label: [tw`peer-focus:(border-green-500 text-green-500)`],
      },
      blue: {
        container: [],
        input: [tw`focus:(border-blue-500 border-t-transparent)`],
        label: [tw`peer-focus:(border-blue-500 text-blue-500)`],
      },
      red: {
        container: [],
        input: [tw`focus:(border-red-500 border-t-transparent)`],
        label: [tw`peer-focus:(border-red-500 text-red-500)`],
      },
      purple: {
        container: [],
        input: [tw`focus:(border-purple-500 border-t-transparent)`],
        label: [tw`peer-focus:(border-purple-500 text-purple-500)`],
      },
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
    disables: {
      container: [tw`opacity-60`],
      input: [tw`disabled:(border-0 bg-slate-50)`],
      label: [tw`peer-disabled:before:border-0`, tw`peer-disabled:after:border-0`],
    },
    errors: {
      container: [tw`text-red-500 border-red-500`],
      input: [tw`border`, tw`focus:(border-red-500 border-t-transparent)`],
      label: [tw`peer-focus:(border-red-500 text-red-500)`],
    },
  },
};

export default input;
