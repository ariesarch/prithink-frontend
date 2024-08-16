import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
const meta: Meta<typeof Button> = {
    title: 'Component/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        size: "md",
        variant: "solid",
        children: "Click me Button"
    }
}
export const Outline: Story = {
    args: {
        size: "md",
        variant: "outline",
        children: "Outline Button"
    }
}
export const Ghost: Story = {
    args: {
        size: "md",
        variant: "ghost",
        children: "Ghost Button"
    }
}