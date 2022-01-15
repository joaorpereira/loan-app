import { Meta, Story } from "@storybook/react";
import Input from ".";
import { InputProps } from "./Input";

export default {
	title: "Input",
	component: Input,
	argTypes: {
		value: {
			control: { type: "text" }
		},
		onChange: {
			control: { type: "" }
		}
	}
} as Meta;

export const Default: Story<InputProps> = (args) => (
	<Input aria-label="Loan purpose" {...args} />
);

Default.args = {
	label: "Loan purpose",
	value: "House",
	fullWidth: false,
	placeholder: ""
};
