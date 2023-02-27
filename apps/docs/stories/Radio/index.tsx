import { Radio as UIRadio, RadioProps as UIRadioProps, theme } from '@sudari/ui';

export type RadioProps = UIRadioProps;

const Radio: React.FC<RadioProps> = (props) => <UIRadio {...props} />;
Radio.defaultProps = theme.radio.defaultProps;

export default Radio;
