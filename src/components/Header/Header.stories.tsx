import { Meta, Story } from "@storybook/react";
import Header from ".";
import { HeaderProps } from "./Header";

export default {
	title: "Header",
	component: Header,
	argTypes: {
		title: {
			control: { type: "text" }
		}
	}
} as Meta;

export const Default: Story<HeaderProps> = (args) => <Header {...args} />;

Default.args = {
	title: "Loan Information"
};
