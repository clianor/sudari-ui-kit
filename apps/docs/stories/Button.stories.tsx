import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import { Button } from "ui";

const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: true },
  },
  args: {
    label: "Click!",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button");
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(button).toHaveFocus();

    expect(args.onClick).toHaveBeenCalledTimes(1);

    userEvent.click(canvasElement);
    expect(button).not.toHaveFocus();
  },
};
