import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import { color } from '../../components/Checkbox/type';

export interface CheckboxStyleTypes {
  defaultProps: {
    color: color;
  };
  styles: {
    base: {
      container: CSSInterpolation;
      input: CSSInterpolation;
      icon: { [key in color]: CSSInterpolation };
      label: CSSInterpolation;
    };
  };
}

const checkbox: CheckboxStyleTypes = {
  defaultProps: {
    color: 'green',
  },
  styles: {
    base: {
      container: tw`relative inline-flex items-center h-6 rounded-full cursor-pointer`,
      input: [tw`cursor-pointer`, tw`appearance-none`],
      icon: {
        gray: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-gray-500 rounded stroke-2`,
          tw`peer-checked:(bg-gray-500 text-white)`,
        ],
        yellow: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-yellow-500 rounded stroke-2`,
          tw`peer-checked:(bg-yellow-500 text-white)`,
        ],
        green: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-green-500 rounded stroke-2`,
          tw`peer-checked:(bg-green-500 text-white)`,
        ],
        blue: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-blue-500 rounded stroke-2`,
          tw`peer-checked:(bg-blue-500 text-white)`,
        ],
        red: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-red-500 rounded stroke-2`,
          tw`peer-checked:(bg-red-500 text-white)`,
        ],
        purple: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-purple-500 rounded stroke-2`,
          tw`peer-checked:(bg-purple-500 text-white)`,
        ],
      },
      label: tw`mt-px ml-2 font-light text-gray-700 cursor-pointer select-none`,
    },
  },
};

export default checkbox;
