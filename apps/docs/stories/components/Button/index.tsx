import { Button as UIButton, ButtonProps as UIButtonProps, theme } from "ui";

export type ButtonProps = UIButtonProps;

const Button: React.FC<ButtonProps> = (props) => <UIButton {...props} />;
Button.defaultProps = theme.button.defaultProps;

export default Button;
