import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import 'twin.macro';
import { theme } from 'ui';

import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'ui/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    ...theme.checkbox.defaultProps,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const WithLabel: Story = {
  name: 'With label',
  args: {
    label: 'Label',
  },
};

export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" label="Gray" />
      <Checkbox {...args} color="yellow" label="Yellow" />
      <Checkbox {...args} color="green" label="Green" />
      <Checkbox {...args} color="blue" label="Blue" />
      <Checkbox {...args} color="red" label="Red" />
      <Checkbox {...args} color="purple" label="Purple" />
    </Fragment>
  ),
};
