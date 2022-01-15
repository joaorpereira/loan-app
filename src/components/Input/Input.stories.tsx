import { Meta, Story } from "@storybook/react";
import Input from ".";

export default {
	title: "Input",
	component: Input,
	argTypes: {
		value: {
			control: { type: "text" }
		}
	}
} as Meta;

export const Default: Story = (args) => (
	<Input label="Loan purpose" value="House" fullWidth {...args} />
);
