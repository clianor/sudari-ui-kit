import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import type { color, size, variant } from '../../components/Button/type';

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
      filled: {
        white: [
          tw`bg-white text-slate-900`,
          tw`shadow-md shadow-slate-500/20`,
          tw`hover:(shadow-lg shadow-slate-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
        gray: [
          tw`text-white bg-gray-500`,
          tw`shadow-md shadow-gray-500/20`,
          tw`hover:(shadow-lg shadow-gray-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
        yellow: [
          tw`text-white bg-yellow-500`,
          tw`shadow-md shadow-yellow-500/20`,
          tw`hover:(shadow-lg shadow-yellow-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
        green: [
          tw`text-white bg-green-500`,
          tw`shadow-md shadow-green-500/20`,
          tw`hover:(shadow-lg shadow-green-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
        blue: [
          tw`text-white bg-blue-500`,
          tw`shadow-md shadow-blue-500/20`,
          tw`hover:(shadow-lg shadow-blue-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
        red: [
          tw`text-white bg-red-500`,
          tw`shadow-md shadow-red-500/20`,
          tw`hover:(shadow-lg shadow-red-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
        purple: [
          tw`text-white bg-purple-500`,
          tw`shadow-md shadow-purple-500/20`,
          tw`hover:(shadow-lg shadow-purple-500/40)`,
          tw`focus:(opacity-80 shadow-none)`,
          tw`active:(opacity-80 shadow-none)`,
        ],
      },
      outlined: {
        white: [
          tw`border border-white`,
          tw`text-white`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-white/50)`,
          tw`active:opacity-80`,
        ],
        gray: [
          tw`text-gray-500 border border-gray-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-gray-200)`,
          tw`active:opacity-80`,
        ],
        yellow: [
          tw`text-yellow-500 border border-yellow-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-yellow-200)`,
          tw`active:opacity-80`,
        ],
        green: [
          tw`text-green-500 border border-green-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-green-200)`,
          tw`active:opacity-80`,
        ],
        blue: [
          tw`text-blue-500 border border-blue-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-blue-200)`,
          tw`active:opacity-80`,
        ],
        red: [
          tw`text-red-500 border border-red-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-red-200)`,
          tw`active:opacity-80`,
        ],
        purple: [
          tw`text-purple-500 border border-purple-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-purple-200)`,
          tw`active:opacity-80`,
        ],
      },
      text: {
        white: [tw`text-white`, tw`hover:bg-white/10`, tw`active:bg-white/30`],
        gray: [tw`text-gray-500`, tw`hover:bg-gray-500/10`, tw`active:bg-gray-500/30`],
        yellow: [tw`text-yellow-500`, tw`hover:bg-yellow-500/10`, tw`active:bg-yellow-500/30`],
        green: [tw`text-green-500`, tw`hover:bg-green-500/10`, tw`active:bg-green-500/30`],
        blue: [tw`text-blue-500`, tw`hover:bg-blue-500/10`, tw`active:bg-blue-500/30`],
        red: [tw`text-red-500`, tw`hover:bg-red-500/10`, tw`active:bg-red-500/30`],
        purple: [tw`text-purple-500`, tw`hover:bg-purple-500/10`, tw`active:bg-purple-500/30`],
      },
    },
    sizes: {
      sm: [tw`text-xs`, tw`px-4 py-2`, tw`rounded-lg`],
      md: [tw`text-xs`, tw`px-6 py-3`, tw`rounded-lg`],
      lg: [tw`text-sm`, tw`py-3.5 px-7`, tw`rounded-lg`],
    },
  },
};

export default button;
