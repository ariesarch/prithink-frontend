import { Meta, StoryObj } from "@storybook/react";
import TableCell from "./index";

const meta: Meta<typeof TableCell> = {
    title: 'Component/TableCell',
    component: TableCell,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default Cell',
    },
};

export const Header: Story = {
    args: {
        variant: "header",
        colorSchema: "primary",
        children: 'Header Cell',
    },
};

export const Footer: Story = {
    args: {
        variant: "footer",
        colorSchema: "primary",
        children: 'Footer Cell',
    },
};

export const AlignedLeft: Story = {
    args: {
        align: "left",
        children: 'Left Aligned Cell',
    },
};

export const AlignedCenter: Story = {
    args: {
        align: "center",
        children: 'Center Aligned Cell',
    },
};

export const AlignedRight: Story = {
    args: {
        align: "right",
        children: 'Right Aligned Cell',
    },
};

export const Colored: Story = {
    args: {
        colorSchema: "primary",
        children: 'Colored Cell',
    },
};
