import { Meta, Story } from "@storybook/react";
import Select from ".";
import { SelectProps, OptionsProps } from "./Select";

export default {
	title: "Select",
	component: Select,
	argTypes: {
		value: {
			control: { type: "text" }
		},
		onChange: {
			control: { type: "" }
		},
		options: {
			control: { type: "" }
		}
	}
} as Meta;

export const options: OptionsProps[] = [
	{ value: "Debt Consolidation", label: "Debt Consolidation" },
	{ value: "Personal", label: "Personal" },
	{ value: "API error", label: "API error" }
];

export const Default: Story<SelectProps> = (args) => <Select {...args} />;

Default.args = {
	label: "Loan purpose",
	value: "",
	fullWidth: false,
	required: false,
	options: options
};
