import type { Meta, StoryObj } from '@storybook/react';
import { OutlineStarIcon, SolidStarIcon } from 'icons';
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

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} size="sm" />
      <Checkbox {...args} size="md" />
      <Checkbox {...args} size="lg" />
    </Fragment>
  ),
};

export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" />
      <Checkbox {...args} color="yellow" />
      <Checkbox {...args} color="green" />
      <Checkbox {...args} color="blue" />
      <Checkbox {...args} color="red" />
      <Checkbox {...args} color="purple" />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
  },
};

export const Checked: Story = {
  name: 'Checked',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" checked />
      <Checkbox {...args} color="yellow" checked />
      <Checkbox {...args} color="green" checked />
      <Checkbox {...args} color="blue" checked />
      <Checkbox {...args} color="red" checked />
      <Checkbox {...args} color="purple" checked />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" indeterminate />
      <Checkbox {...args} color="yellow" indeterminate />
      <Checkbox {...args} color="green" indeterminate />
      <Checkbox {...args} color="blue" indeterminate />
      <Checkbox {...args} color="red" indeterminate />
      <Checkbox {...args} color="purple" indeterminate />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
    checked: { table: { disable: true } },
    indeterminate: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" disabled />
      <Checkbox {...args} color="yellow" disabled />
      <Checkbox {...args} color="green" disabled />
      <Checkbox {...args} color="blue" disabled />
      <Checkbox {...args} color="red" disabled />
      <Checkbox {...args} color="purple" disabled />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};

export const CustomIcon: Story = {
  name: 'Custom icon',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} icon={<OutlineStarIcon />} checked />
      <Checkbox {...args} icon={<SolidStarIcon />} checked />
    </Fragment>
  ),
  argTypes: {
    checked: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
};
