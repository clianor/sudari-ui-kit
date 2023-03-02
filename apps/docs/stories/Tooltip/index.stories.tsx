import { Button, theme } from '@sudari/ui';

import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import 'twin.macro';

import Tooltip from '.';

const meta: Meta<typeof Tooltip> = {
  title: '@sudari/ui/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    onOpenChange: { table: { disable: true } },
  },
  args: {
    ...theme.tooltip.defaultProps,
    content: 'This is tooltip content',
    onOpenChange: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover Me</Button>
    </Tooltip>
  ),
};

export const Placement: Story = {
  name: 'Placement',
  render: (args) => (
    <div tw="grid grid-cols-3 gap-4">
      <Tooltip {...args} content="Test Tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="top-start">
        <Button>Top Start</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="top-end">
        <Button>Top End</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="right-start">
        <Button>Right Start</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="right-end">
        <Button>Right End</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="bottom-start">
        <Button>Bottom Start</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="bottom-end">
        <Button>Bottom End</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="left-start">
        <Button>Left Start</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip" placement="left-end">
        <Button>Left End</Button>
      </Tooltip>
    </div>
  ),
};

export const Interactive: Story = {
  name: 'Interactive',
  render: (args) => (
    <Fragment>
      <Tooltip {...args} content="Test Tooltip" interactive>
        <Button>Click Me (with Interactive)</Button>
      </Tooltip>
      <Tooltip {...args} content="Test Tooltip">
        <Button>Click Me</Button>
      </Tooltip>
    </Fragment>
  ),
};

export const Controlled: Story = {
  name: 'Controlled',
  render: (args) => (
    <Tooltip {...args} content="Test Tooltip">
      <Button>Hover Me</Button>
    </Tooltip>
  ),
  args: {
    open: true,
  },
};
