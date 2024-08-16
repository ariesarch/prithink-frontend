import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";

// Define metadata for the Checkbox component stories
const meta: Meta<typeof Checkbox> = {
    title: 'Component/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define different variants for the Checkbox stories
export const Solid: Story = {
    args: {
        variant: "solid",
        colorschema: "primary",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        colorschema: "primary",
    },
};

// Optionally, you can add stories for different sizes as well
export const Small: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
        // size: "sm",
    },
};

export const Medium: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
        // size: "md",
    },
};

export const Large: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
        // size: "lg",
    },
};
