import { Meta, StoryObj } from "@storybook/react";
import Select from "./index";

const meta: Meta<typeof Select> = {
    title: 'Component/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Sample options for the Select component
const sampleOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

export const Solid: Story = {
    args: {
        variant: "solid",
        colorschema: "primary",
        // size: "md",
        options: sampleOptions,
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        colorschema: "primary",
        // size: "md",
        options: sampleOptions,
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        colorschema: "primary",
        // size: "md",
        options: sampleOptions,
    },
};

export const Small: Story = {
    args: {
        variant: "outline",
        // size: "sm",
        colorschema: "primary",
        options: sampleOptions,
    },
};

export const Medium: Story = {
    args: {
        variant: "outline",
        // size: "md",
        colorschema: "primary",
        options: sampleOptions,
    },
};

export const Large: Story = {
    args: {
        variant: "outline",
        // size: "lg",
        colorschema: "primary",
        options: sampleOptions,
    },
};
