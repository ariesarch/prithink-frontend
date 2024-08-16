import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
    title: 'Component/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Small Avatar",
        size: "sm",
        border: "light",
        rounded: false,
    },
};

export const Medium: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Medium Avatar",
        size: "md",
        border: "light",
        rounded: false,
    },
};

export const Large: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Large Avatar",
        size: "lg",
        border: "light",
        rounded: false,
    },
};

export const RoundedSmall: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Rounded Small Avatar",
        size: "sm",
        border: "light",
        rounded: true,
    },
};

export const RoundedMedium: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Rounded Medium Avatar",
        size: "md",
        border: "light",
        rounded: true,
    },
};

export const RoundedLarge: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Rounded Large Avatar",
        size: "lg",
        border: "light",
        rounded: true,
    },
};

export const BorderNone: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Avatar with No Border",
        size: "md",
        border: "none",
        rounded: true,
    },
};

export const BorderDark: Story = {
    args: {
        src: "/path/to/avatar.jpg",
        alt: "Avatar with Dark Border",
        size: "md",
        border: "dark",
        rounded: false,
    },
};
