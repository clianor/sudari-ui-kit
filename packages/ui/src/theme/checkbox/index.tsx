import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

export interface CheckboxStyleTypes {
  defaultProps: {};
  styles: {
    base: {
      container: CSSInterpolation;
      input: CSSInterpolation;
      icon: CSSInterpolation;
      label: CSSInterpolation;
    };
  };
}

const checkbox: CheckboxStyleTypes = {
  defaultProps: {},
  styles: {
    base: {
      container: tw`relative inline-flex items-center h-6 rounded-full cursor-pointer gap-x-2`,
      input: [tw`cursor-pointer`, tw`appearance-none`],
      icon: [
        tw`flex items-center justify-center`,
        tw`w-6 h-6 p-1`,
        tw`text-transparent border-2 border-green-500 rounded stroke-2`,
        tw`peer-checked:(bg-green-500 text-white)`,
      ],
      label: tw`mt-px font-light text-gray-700 cursor-pointer select-none`,
    },
  },
};

export default checkbox;
