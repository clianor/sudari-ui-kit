import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import { variant } from '../../components/Input/type';

export interface InputStyleTypes {
  defaultProps: {
    placeholder: string;
    variant: variant;
  };
  styles: {
    base: {
      container: CSSInterpolation;
      input: CSSInterpolation;
      label: CSSInterpolation;
    };
    variants: {
      [key in variant]: {
        container: CSSInterpolation;
        input: CSSInterpolation;
        label: CSSInterpolation;
      };
    };
  };
}

const input: InputStyleTypes = {
  defaultProps: {
    placeholder: ' ',
    variant: 'outlined',
  },
  styles: {
    base: {
      container: tw`relative w-full h-10 min-w-[200px]`,
      input: [
        tw`w-full h-full`,
        tw`m-0`,
        tw`bg-transparent`,
        tw`text-sm text-slate-700`,
        tw`outline outline-0 focus:outline-0`,
      ],
      label: [
        tw`absolute left-0`,
        tw`w-full h-full`,
        tw`flex`,
        tw`text-sm pointer-events-none select-none`,
      ],
    },
    variants: {
      outlined: {
        container: [],
        input: [
          tw`text-sm text-slate-700`,
          tw`border rounded-md border-slate-200`,
          tw`bg-transparent`,
          tw`px-3`,
          tw`border-t-transparent`,
          tw`placeholder-shown:border-t-slate-200`,
          tw`focus:(border-green-500 border-2 border-t-transparent)`,
          tw`disabled:(border-0 bg-slate-50)`,
        ],
        label: [
          tw`transition-all`,
          tw`-top-1.5`,
          tw`peer-placeholder-shown:(text-sm leading-[3.5rem])`,
          tw`text-xs text-slate-700`,
          tw`peer-focus:(text-xs)`,
          // before
          tw`before:[content:' ']`,
          tw`before:(w-3 h-2 mt-1.5 mr-0.5)`,
          tw`before:(border-t border-l rounded-tl-md)`,
          tw`peer-placeholder-shown:before:border-0`,
          tw`peer-focus:before:(border-t-2 border-l-2 border-green-500 rounded-tl-md)`,
          // after
          tw`after:[content:' ']`,
          tw`after:(w-full h-2 mt-1.5 ml-0.5)`,
          tw`after:(border-t border-r rounded-tr-md)`,
          tw`peer-placeholder-shown:after:border-0`,
          tw`peer-focus:after:(border-t-2 border-r-2 border-green-500 rounded-tr-md)`,
        ],
      },
      standard: {
        container: [],
        input: [],
        label: [],
      },
      static: {
        container: [],
        input: [],
        label: [],
      },
    },
  },
};

export default input;
