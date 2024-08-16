import { Meta, StoryObj } from "@storybook/react";
import Radio from "./index";

const meta: Meta<typeof Radio> = {
    title: "Component/Radio",
    component: Radio,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Solid: Story = {
    args: {
        variant: "solid",
    }
}
export const ReadOnly: Story = {
    args: {
        variant: "readonly"
    }
}