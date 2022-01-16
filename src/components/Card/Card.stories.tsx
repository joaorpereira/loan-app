import { Meta, Story } from "@storybook/react";
import Card from ".";

export default {
	title: "Card",
	component: Card,
	argTypes: {
		title: {
			control: { type: "text" }
		}
	}
} as Meta;

export const Default: Story = (args) => <Card {...args} />;
