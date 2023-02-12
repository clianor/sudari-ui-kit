import { CSSInterpolation } from '@emotion/serialize';
import tw, { css } from 'twin.macro';

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
      container: [
        tw`relative inline-flex items-center h-6 rounded-full cursor-pointer`,
        css`
          &.disabled {
            ${tw`pointer-events-none`}
          }
        `,
      ],
      input: tw`appearance-none`,
      icon: {
        gray: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-gray-500 rounded stroke-2`,
          tw`peer-checked:(bg-gray-500 text-white)`,
          tw`peer-indeterminate:(bg-gray-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        yellow: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-yellow-500 rounded stroke-2`,
          tw`peer-checked:(bg-yellow-500 text-white)`,
          tw`peer-indeterminate:(bg-yellow-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        green: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-green-500 rounded stroke-2`,
          tw`peer-checked:(bg-green-500 text-white)`,
          tw`peer-indeterminate:(bg-green-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        blue: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-blue-500 rounded stroke-2`,
          tw`peer-checked:(bg-blue-500 text-white)`,
          tw`peer-indeterminate:(bg-blue-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        red: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-red-500 rounded stroke-2`,
          tw`peer-checked:(bg-red-500 text-white)`,
          tw`peer-indeterminate:(bg-red-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        purple: [
          tw`flex items-center justify-center`,
          tw`w-6 h-6 p-1`,
          tw`text-transparent border-2 border-purple-500 rounded stroke-2`,
          tw`peer-checked:(bg-purple-500 text-white)`,
          tw`peer-indeterminate:(bg-purple-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
      },
      label: tw`mt-px ml-2 font-light text-gray-700 select-none`,
    },
  },
};

export default checkbox;
