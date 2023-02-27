import { theme } from '@sudari/ui';

import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
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

export const Variants: Story = {
  name: 'Variants',
  render: (args) => (
    <Fragment>
      <Input {...args} label="static" variant="static" placeholder="placeholder" />
      <Input {...args} label="standard" variant="standard" placeholder="placeholder" />
      <Input {...args} label="outlined" variant="outlined" placeholder="placeholder" />
    </Fragment>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <div tw="grid grid-cols-3 gap-4">
      <Input {...args} label="Small" size="sm" variant="static" placeholder="placeholder" />
      <Input {...args} label="Small" size="sm" variant="standard" placeholder="placeholder" />
      <Input {...args} label="Small" size="sm" variant="outlined" placeholder="placeholder" />

      <Input {...args} label="Medium" size="md" variant="static" placeholder="placeholder" />
      <Input {...args} label="Medium" size="md" variant="standard" placeholder="placeholder" />
      <Input {...args} label="Medium" size="md" variant="outlined" placeholder="placeholder" />

      <Input {...args} label="Large" size="lg" variant="static" placeholder="placeholder" />
      <Input {...args} label="Large" size="lg" variant="standard" placeholder="placeholder" />
      <Input {...args} label="Large" size="lg" variant="outlined" placeholder="placeholder" />
    </div>
  ),
};
