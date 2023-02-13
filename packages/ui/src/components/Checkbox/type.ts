import { colors } from '../../types/common';

export type size = 'sm' | 'md' | 'lg';
export type color = Exclude<colors, 'white'>;
