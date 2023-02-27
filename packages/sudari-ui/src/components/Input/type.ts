import { colors } from '../../types/common';

export type variant = 'static' | 'standard' | 'outlined';
export type size = 'sm' | 'md' | 'lg';
export type color = Exclude<colors, 'white'>;
