import { Checkbox as UICheckbox, CheckboxProps as UICheckboxProps, theme } from 'ui';

export type CheckboxProps = UICheckboxProps;

const Checkbox: React.FC<CheckboxProps> = (props) => <UICheckbox {...props} />;
Checkbox.defaultProps = theme.checkbox.defaultProps;

export default Checkbox;
