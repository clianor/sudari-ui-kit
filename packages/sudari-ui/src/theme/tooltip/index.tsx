import { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

import type {
  animation,
  dismiss,
  interactive,
  offset,
  placement,
} from '../../components/Tooltip/type';

export interface TooltipStyleTypes {
  defaultProps: {
    interactive: interactive;
    placement: placement;
    offset: offset;
    dismiss: dismiss;
    animate: animation;
  };
  styles: {
    base: CSSInterpolation;
  };
}

const tooltip: TooltipStyleTypes = {
  defaultProps: {
    interactive: false,
    placement: 'top',
    offset: 5,
    dismiss: {
      enabled: true,
      escapeKey: true,
      referencePress: false,
      referencePressEvent: 'pointerdown',
      outsidePress: true,
      outsidePressEvent: 'pointerdown',
      ancestorScroll: false,
      bubbles: true,
    },
    animate: {
      unmount: {},
      mount: {},
    },
  },
  styles: {
    base: [
      tw`bg-black`,
      tw`px-3 py-1.5`,
      tw`rounded-lg`,
      tw`text-sm`,
      tw`text-white`,
      tw`focus:outline-none`,
      tw`break-words`,
      tw`z-[999]`,
      tw`whitespace-normal`,
    ],
  },
};

export default tooltip;
