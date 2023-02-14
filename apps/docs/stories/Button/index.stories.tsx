import { theme } from '@sudari/ui';

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Fragment } from 'react';
import 'twin.macro';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: '@sudari/ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', name: 'label', description: '버튼의 자식요소' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Hello Button',
    ...theme.button.defaultProps,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(button).toHaveFocus();

    expect(args.onClick).toHaveBeenCalledTimes(1);

    userEvent.click(canvasElement);
    expect(button).not.toHaveFocus();
  },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <Fragment>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </Fragment>
  ),
  argTypes: {
    children: { table: { disable: true } },
    size: { table: { disable: true } },
  },
};

export const Variants: Story = {
  name: 'Variants',
  render: (args) => (
    <Fragment>
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </Fragment>
  ),
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <Fragment>
      <Button {...args} color="white">
        White
      </Button>
      <Button {...args} color="gray">
        Gray
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="purple">
        Purple
      </Button>
    </Fragment>
  ),
  argTypes: {
    children: { table: { disable: true } },
    color: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <Fragment>
      <Button {...args} color="white">
        White
      </Button>
      <Button {...args} color="gray">
        Gray
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="purple">
        Purple
      </Button>
    </Fragment>
  ),
  argTypes: {
    children: { table: { disable: true } },
    color: { table: { disable: true } },
  },
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  name: 'Full Width',
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};
