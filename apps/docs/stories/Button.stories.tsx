import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import { Button, ButtonProps } from "ui";

const meta: Meta<ButtonProps> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: true },
  },
  args: {
    label: "Click!",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button");
  expect(button).toBeInTheDocument();

  await userEvent.click(button);
  expect(button).toHaveFocus();

  await userEvent.click(canvasElement);
  expect(button).not.toHaveFocus();
};
