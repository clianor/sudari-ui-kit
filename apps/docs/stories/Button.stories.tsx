import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "ui";

const meta: Meta<ButtonProps> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Boop",
  },
};
