export const amountFormatter = (value: string) => {
	return Number(value.replace(/[^\d.]/g, ""));
};
