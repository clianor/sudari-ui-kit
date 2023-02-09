import { CSSInterpolation } from "@emotion/serialize";
import tw from "twin.macro";
import type { size } from "../../components/Button/type";

export interface ButtonStyleTypes {
  defaultProps: {
    size: size;
  };
  styles: {
    base: {
      initial: CSSInterpolation;
    };
    sizes: { [key in size]: CSSInterpolation };
  };
}

const button: ButtonStyleTypes = {
  defaultProps: {
    size: "md",
  },
  styles: {
    base: {
      initial: [
        tw`select-none`,
        tw`font-sans font-bold text-center align-middle`,
        tw`disabled:(opacity-50 shadow-none pointer-events-none)`,
      ],
    },
    sizes: {
      sm: [tw`text-xs`, tw`px-4 py-2`, tw`rounded-lg`],
      md: [tw`text-xs`, tw`px-6 py-3`, tw`rounded-lg`],
      lg: [tw`text-sm`, tw`py-3.5 px-7`, tw`rounded-lg`],
    },
  },
};

export default button;
