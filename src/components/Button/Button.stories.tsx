import { Meta, Story } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./Button";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		children: {
			control: { type: "text" }
		},
		variant: {
			options: ["outlined", "text", "contained"],
			control: { type: "radio" }
		},
		color: {
			options: ["inherit", "primary", "secondary", "default"],
			control: { type: "radio" }
		}
	}
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
	children: "Submit Application",
	variant: "contained",
	fullWidth: false,
	color: "primary"
};
