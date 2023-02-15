import { CheckIcon, OutlineStarIcon, SolidStarIcon } from '@sudari/icons';
import { theme } from '@sudari/ui';

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Fragment } from 'react';
import 'twin.macro';

import IconButton from '.';

const icons = {
  Check: <CheckIcon />,
  SolidStar: <SolidStarIcon />,
  OutlineStar: <OutlineStarIcon />,
};

const meta: Meta<typeof IconButton> = {
  title: '@sudari/ui/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { options: Object.keys(icons), mapping: icons, control: { type: 'select' } },
    onClick: { action: 'clicked' },
  },
  args: {
    icon: <SolidStarIcon />,
    ...theme.iconButton.defaultProps,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const iconButton = canvas.getByRole('button');
    expect(iconButton).toBeInTheDocument();

    userEvent.click(iconButton);
    expect(iconButton).toHaveFocus();

    expect(args.onClick).toHaveBeenCalledTimes(1);

    userEvent.click(canvasElement);
    expect(iconButton).not.toHaveFocus();
  },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <Fragment>
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
      <IconButton {...args} size="lg" />
    </Fragment>
  ),
  argTypes: {
    size: { table: { disable: true } },
  },
};

export const Variants: Story = {
  name: 'Variants',
  render: (args) => (
    <Fragment>
      <IconButton {...args} variant="filled" />
      <IconButton {...args} variant="outlined" />
      <IconButton {...args} variant="text" />
    </Fragment>
  ),
  argTypes: {
    variant: { table: { disable: true } },
  },
};

export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <Fragment>
      <IconButton {...args} color="white" />
      <IconButton {...args} color="gray" />
      <IconButton {...args} color="yellow" />
      <IconButton {...args} color="green" />
      <IconButton {...args} color="blue" />
      <IconButton {...args} color="red" />
      <IconButton {...args} color="purple" />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <Fragment>
      <IconButton {...args} color="white" />
      <IconButton {...args} color="gray" />
      <IconButton {...args} color="yellow" />
      <IconButton {...args} color="green" />
      <IconButton {...args} color="blue" />
      <IconButton {...args} color="red" />
      <IconButton {...args} color="purple" />
    </Fragment>
  ),
  argTypes: {
    color: { table: { disable: true } },
  },
  args: {
    disabled: true,
  },
};

export const borderRadius: Story = {
  name: 'borderRadius',
  render: (args) => (
    <Fragment>
      <IconButton {...args} variant="filled" borderRadius="none" />
      <IconButton {...args} variant="filled" borderRadius="sm" />
      <IconButton {...args} variant="filled" borderRadius="md" />
      <IconButton {...args} variant="filled" borderRadius="lg" />
      <IconButton {...args} variant="filled" borderRadius="full" />
    </Fragment>
  ),
  argTypes: {
    variant: { table: { disable: true } },
  },
};
