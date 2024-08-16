import { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./index";

const meta: Meta<typeof PasswordInput> = {
    title: 'Component/PasswordInput',
    component: PasswordInput,
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
        placeholder: "Enter password",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
        placeholder: "Enter password",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        colorschema: "primary",
        placeholder: "Enter password",
    },
};

export const Small: Story = {
    args: {
        variant: "outline",
        // size: "sm",
        colorschema: "primary",
        placeholder: "Small Password",
    },
};

export const Medium: Story = {
    args: {
        variant: "outline",
        // size: "md",
        colorschema: "primary",
        placeholder: "Medium Password",
    },
};

export const Large: Story = {
    args: {
        variant: "outline",
        // size: "lg",
        colorschema: "primary",
        placeholder: "Large Password",
    },
};
