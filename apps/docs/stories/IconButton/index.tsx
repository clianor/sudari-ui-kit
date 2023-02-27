import {
  IconButton as UIIconButton,
  IconButtonProps as UIIconButtonProps,
  theme,
} from '@sudari/ui';

export type IconButtonProps = UIIconButtonProps;

const IconButton: React.FC<IconButtonProps> = (props) => <UIIconButton {...props} />;
IconButton.defaultProps = theme.iconButton.defaultProps;

export default IconButton;
