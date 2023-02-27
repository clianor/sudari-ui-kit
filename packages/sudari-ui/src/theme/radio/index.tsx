import { CSSInterpolation } from '@emotion/serialize';
import tw, { css } from 'twin.macro';

import { color, size } from '../../components/Checkbox/type';

export interface RadioStyleTypes {
  defaultProps: {
    size: size;
    color: color;
  };
  styles: {
    base: {
      container: CSSInterpolation;
      sizes: { [key in size]: CSSInterpolation };
      input: CSSInterpolation;
      icon: { [key in color]: CSSInterpolation };
    };
  };
}

const radio: RadioStyleTypes = {
  defaultProps: {
    size: 'md',
    color: 'green',
  },
  styles: {
    base: {
      container: [
        tw`relative inline-flex items-center rounded-full cursor-pointer`,
        css`
          &.disabled {
            ${tw`pointer-events-none`}
          }
        `,
      ],
      sizes: {
        sm: [tw`w-4 h-4 p-0.5`],
        md: [tw`w-6 h-6 p-1`],
        lg: [tw`w-8 h-8 p-1.5`],
      },
      input: tw`appearance-none`,
      icon: {
        gray: [
          tw`flex items-center justify-center`,
          tw`text-transparent border-2 border-gray-500 rounded-full stroke-2`,
          tw`peer-checked:(bg-gray-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        yellow: [
          tw`flex items-center justify-center`,
          tw`text-transparent border-2 border-yellow-500 rounded-full stroke-2`,
          tw`peer-checked:(bg-yellow-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        green: [
          tw`flex items-center justify-center`,
          tw`text-transparent border-2 border-green-500 rounded-full stroke-2`,
          tw`peer-checked:(bg-green-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        blue: [
          tw`flex items-center justify-center`,
          tw`text-transparent border-2 border-blue-500 rounded-full stroke-2`,
          tw`peer-checked:(bg-blue-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        red: [
          tw`flex items-center justify-center`,
          tw`text-transparent border-2 border-red-500 rounded-full stroke-2`,
          tw`peer-checked:(bg-red-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
        purple: [
          tw`flex items-center justify-center`,
          tw`text-transparent border-2 border-purple-500 rounded-full stroke-2`,
          tw`peer-checked:(bg-purple-500 text-white)`,
          tw`peer-disabled:opacity-50`,
        ],
      },
    },
  },
};

export default radio;
