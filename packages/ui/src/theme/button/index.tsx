import { CSSInterpolation } from "@emotion/serialize";
import tw from "twin.macro";
import type { color, size, variant } from "../../components/Button/type";

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
    variant: "filled",
    size: "md",
    color: "green",
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
        green: [
          tw`text-white bg-green-500`,
          tw`shadow-md shadow-green-500/20`,
          tw`hover:(shadow-lg shadow-green-500/40)`,
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
        green: [
          tw`text-green-500 border border-green-500`,
          tw`hover:opacity-80`,
          tw`focus:(ring ring-green-200)`,
          tw`active:opacity-80`,
        ],
      },
      text: {
        white: [],
        green: [
          tw`text-green-500`,
          tw`hover:bg-green-500/10`,
          tw`active:bg-green-500/30`,
        ],
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
