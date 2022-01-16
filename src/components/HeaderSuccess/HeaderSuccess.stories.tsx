import { Meta, Story } from "@storybook/react";
import HeaderSuccess from ".";

export default {
	title: "HeaderSuccess",
	component: HeaderSuccess,
	argTypes: {}
} as Meta;

export const Default: Story = (args) => <HeaderSuccess {...args} />;
