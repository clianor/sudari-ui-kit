import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset as fuiOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import React, {
  HTMLAttributes,
  ReactNode,
  cloneElement,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import merge from 'ts-deepmerge';

import { useTheme } from '../../context/theme';
import type { animation, dismiss, interactive, offset, placement } from './type';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'placeholder'> {
  open?: boolean;
  content?: ReactNode;
  interactive?: interactive;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animation;
  onOpenChange?: (open: boolean) => void;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      open,
      content,
      interactive,
      placement,
      offset,
      dismiss,
      animate,
      children,
      onOpenChange,
      ...props
    },
    ref,
  ) => {
    // init
    const [internalOpen, setInternalOpen] = useState(false);

    const { tooltip } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tooltip;

    // set default props
    open = open ?? internalOpen;
    onOpenChange = onOpenChange ?? setInternalOpen;
    interactive = interactive ?? defaultProps.interactive;
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;

    // set animation
    const animation = {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    };
    const appliedAnimation = merge(animation, animate);

    // set @floating-ui
    const { x, y, reference, floating, strategy, refs, update, context } = useFloating({
      open,
      onOpenChange,
      middleware: [fuiOffset(offset), flip(), shift()],
      placement,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useClick(context, {
        enabled: interactive,
      }),
      useFocus(context),
      useHover(context),
      useRole(context, { role: 'tooltip' }),
      useDismiss(context, dismiss),
    ]);

    useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }
      return () => {};
    }, [open, update, refs.reference, refs.floating]);

    const mergedRef = useMergeRefs([ref, floating]);
    const childMergedRef = useMergeRefs([ref, reference]);

    // return
    return (
      <>
        {typeof children === 'string' ? (
          <span
            {...getReferenceProps({
              ref: childMergedRef,
            })}
          >
            {children}
          </span>
        ) : (
          cloneElement(children as any, {
            ...getReferenceProps({
              ...(children as any)?.props,
              ref: childMergedRef,
            }),
          })
        )}
        <FloatingPortal>
          <AnimatePresence>
            {open && (
              <motion.div
                {...getFloatingProps({
                  ...props,
                  ref: mergedRef,
                  css: base,
                  style: {
                    position: strategy,
                    top: y ?? '',
                    left: x ?? '',
                  },
                })}
                initial="unmount"
                exit="unmount"
                animate={open ? 'mount' : 'unmount'}
                variants={appliedAnimation as Variants}
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </>
    );
  },
);
Tooltip.displayName = 'Tooltip';
