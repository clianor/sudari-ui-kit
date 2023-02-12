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
  argTypes: {
    label: { table: { disable: true } },
    color: { table: { disable: true } },
  },
};

export const Checked: Story = {
  name: 'Checked',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" label="Gray" checked />
      <Checkbox {...args} color="yellow" label="Yellow" checked />
      <Checkbox {...args} color="green" label="Green" checked />
      <Checkbox {...args} color="blue" label="Blue" checked />
      <Checkbox {...args} color="red" label="Red" checked />
      <Checkbox {...args} color="purple" label="Purple" checked />
    </Fragment>
  ),
  argTypes: {
    label: { table: { disable: true } },
    color: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" label="Gray" indeterminate />
      <Checkbox {...args} color="yellow" label="Yellow" indeterminate />
      <Checkbox {...args} color="green" label="Green" indeterminate />
      <Checkbox {...args} color="blue" label="Blue" indeterminate />
      <Checkbox {...args} color="red" label="Red" indeterminate />
      <Checkbox {...args} color="purple" label="Purple" indeterminate />
    </Fragment>
  ),
  argTypes: {
    label: { table: { disable: true } },
    color: { table: { disable: true } },
    checked: { table: { disable: true } },
    indeterminate: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <Fragment>
      <Checkbox {...args} color="gray" label="Gray" disabled />
      <Checkbox {...args} color="yellow" label="Yellow" disabled />
      <Checkbox {...args} color="green" label="Green" disabled />
      <Checkbox {...args} color="blue" label="Blue" disabled />
      <Checkbox {...args} color="red" label="Red" disabled />
      <Checkbox {...args} color="purple" label="Purple" disabled />
    </Fragment>
  ),
  argTypes: {
    label: { table: { disable: true } },
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
    label: { table: { disable: true } },
    checked: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
};
