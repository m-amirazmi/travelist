import type { Meta, StoryObj } from "@storybook/react";
import Container from "./container";

const meta = {
  title: "Components/Container",
  component: Container,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "full"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "sm",
    children: <div>This is children</div>,
  },
};
