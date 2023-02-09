import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import { Button } from "ui";
import "twin.macro";

const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    onClick: { action: true },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
  args: {
    children: "Click!",
    size: "md",
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

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div tw="grid grid-cols-3 gap-x-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
