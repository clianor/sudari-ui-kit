import { theme } from '@sudari/ui';

import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: '@sudari/ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
  },
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '2rem' }}>
      <Input {...args} label="static" variant="static" placeholder="placeholder" />
      <Input {...args} label="standard" variant="standard" placeholder="placeholder" />
      <Input {...args} label="outlined" variant="outlined" placeholder="placeholder" />
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '2rem' }}>
      <Input {...args} label="Small" size="sm" variant="static" placeholder="placeholder" />
      <Input {...args} label="Medium" size="md" variant="static" placeholder="placeholder" />
      <Input {...args} label="Large" size="lg" variant="static" placeholder="placeholder" />

      <Input {...args} label="Small" size="sm" variant="standard" placeholder="placeholder" />
      <Input {...args} label="Medium" size="md" variant="standard" placeholder="placeholder" />
      <Input {...args} label="Large" size="lg" variant="standard" placeholder="placeholder" />

      <Input {...args} label="Small" size="sm" variant="outlined" placeholder="placeholder" />
      <Input {...args} label="Medium" size="md" variant="outlined" placeholder="placeholder" />
      <Input {...args} label="Large" size="lg" variant="outlined" placeholder="placeholder" />
    </div>
  ),
};

export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '2rem' }}>
      <Input {...args} label="gray" placeholder="gray" color="gray" />
      <Input {...args} label="yellow" placeholder="yellow" color="yellow" />
      <Input {...args} label="green" placeholder="green" color="green" />
      <Input {...args} label="blue" placeholder="blue" color="blue" />
      <Input {...args} label="red" placeholder="red" color="red" />
      <Input {...args} label="purple" placeholder="purple" color="purple" />
    </div>
  ),
};

export const Errors: Story = {
  name: 'Errors',
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '2rem' }}>
      <Input {...args} label="static" variant="static" placeholder="placeholder" error />
      <Input {...args} label="standard" variant="standard" placeholder="placeholder" error />
      <Input {...args} label="outlined" variant="outlined" placeholder="placeholder" error />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '2rem' }}>
      <Input {...args} label="static" variant="static" placeholder="placeholder" disabled />
      <Input {...args} label="standard" variant="standard" placeholder="placeholder" disabled />
      <Input {...args} label="outlined" variant="outlined" placeholder="placeholder" disabled />

      <Input
        {...args}
        label="static"
        variant="static"
        placeholder="placeholder"
        value="Static"
        disabled
      />
      <Input
        {...args}
        label="standard"
        variant="standard"
        placeholder="placeholder"
        value="Standard"
        disabled
      />
      <Input
        {...args}
        label="outlined"
        variant="outlined"
        placeholder="placeholder"
        value="Outlined"
        disabled
      />

      <Input
        {...args}
        label="static"
        variant="static"
        placeholder="placeholder"
        value="Static"
        disabled
        error
      />
      <Input
        {...args}
        label="standard"
        variant="standard"
        placeholder="placeholder"
        value="Standard"
        disabled
        error
      />
      <Input
        {...args}
        label="outlined"
        variant="outlined"
        placeholder="placeholder"
        value="Outlined"
        disabled
        error
      />
    </div>
  ),
};
