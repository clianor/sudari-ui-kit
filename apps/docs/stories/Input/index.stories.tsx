import { theme } from '@sudari/ui';

import type { Meta, StoryObj } from '@storybook/react';
import 'twin.macro';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: '@sudari/ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    ...theme.input.defaultProps,
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};
