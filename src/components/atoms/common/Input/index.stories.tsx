import { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
    title: 'Component/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: "solid",
        colorschema: "primary",
        placeholder: "Enter text",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
        placeholder: "Enter text",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        colorschema: "primary",
        placeholder: "Enter text",
    },
};
