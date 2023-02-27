import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import { variant } from '../../components/Input/type';
import inputOutlined from './variants/inputOutlined';
import inputStandard from './variants/inputStandard';
import inputStatic from './variants/inputStatic';

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
      outlined: inputOutlined,
      standard: inputStandard,
      static: inputStatic,
    },
  },
};

export default input;
