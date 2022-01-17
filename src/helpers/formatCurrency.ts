export const formatter = (value: string) => {
	return value
		.replace(/(?!\.)\D/g, "")
		.replace(/(?<=\..*)\./g, "")
		.replace(/(?<=\.\d\d).*/g, "")
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
