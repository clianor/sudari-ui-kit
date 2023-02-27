import { Input as UIInput, InputProps as UIInputProps, theme } from '@sudari/ui';

import { FC } from 'react';

export type InputProps = UIInputProps;

const Input: FC<InputProps> = (props) => <UIInput {...props} />;
Input.defaultProps = theme.input.defaultProps;

export default Input;
