import { Button as UIButton, ButtonProps as UIButtonProps } from "ui";

export type ButtonProps = UIButtonProps;

const Button = (props: ButtonProps) => <UIButton {...props} />;

export default Button;
