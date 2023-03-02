import { Tooltip as UITooltip, TooltipProps as UITooltipProps, theme } from '@sudari/ui';

export type TooltipProps = UITooltipProps;

const Tooltip: React.FC<TooltipProps> = (props) => <UITooltip {...props} />;
Tooltip.defaultProps = theme.tooltip.defaultProps;

export default Tooltip;
