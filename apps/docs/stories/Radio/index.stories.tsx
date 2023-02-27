import { OutlineStarIcon, SolidStarIcon } from '@sudari/icons';
import { theme } from '@sudari/ui';

import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import 'twin.macro';

import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: '@sudari/ui/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
    ...theme.radio.defaultProps,
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
      <Radio {...args} name="sizes" size="sm" />
      <Radio {...args} name="sizes" size="md" />
      <Radio {...args} name="sizes" size="lg" />
    </Fragment>
  ),
};

export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <Fragment>
      <Radio {...args} name="colors" color="gray" />
      <Radio {...args} name="colors" color="yellow" />
      <Radio {...args} name="colors" color="green" />
      <Radio {...args} name="colors" color="blue" />
      <Radio {...args} name="colors" color="red" />
      <Radio {...args} name="colors" color="purple" />
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
      <Radio {...args} color="gray" checked />
      <Radio {...args} color="yellow" checked />
      <Radio {...args} color="green" checked />
      <Radio {...args} color="blue" checked />
      <Radio {...args} color="red" checked />
      <Radio {...args} color="purple" checked />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <Fragment>
      <Radio {...args} color="gray" disabled />
      <Radio {...args} color="yellow" disabled />
      <Radio {...args} color="green" disabled />
      <Radio {...args} color="blue" disabled />
      <Radio {...args} color="red" disabled />
      <Radio {...args} color="purple" disabled />
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
      <Radio {...args} icon={<OutlineStarIcon />} checked />
      <Radio {...args} icon={<SolidStarIcon />} checked />
    </Fragment>
  ),
  argTypes: {
    checked: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
};
