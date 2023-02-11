import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/testing-library";
import "twin.macro";
import Button from "./components/Button";
import { theme } from "ui";

const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Hello Button",
    onClick: action("clicked"),
    ...theme.button.defaultProps,
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
  render: (args) => (
    <div tw="flex items-end gap-x-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  argTypes: {
    children: { table: { disable: true } },
    size: { table: { disable: true } },
  },
};

export const Variants: Story = {
  name: "Variants",
  render: (args) => (
    <div tw="flex items-end gap-x-4">
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  ),
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export const Colors: Story = {
  name: "Colors",
  render: (args) => (
    <div tw="flex items-end gap-x-4">
      <Button {...args} color="white">
        White
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
    </div>
  ),
  argTypes: {
    children: { table: { disable: true } },
    color: { table: { disable: true } },
  },
};
