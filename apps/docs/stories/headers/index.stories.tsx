import type { Meta, StoryObj } from '@storybook/react';

import BasicHeader from './BasicHeader';

const meta: Meta = {
  title: 'ui/headers',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'BasicHeader',
  render: () => <BasicHeader />,
};
