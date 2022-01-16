export const formatter = (value: string) => {
	if (value) {
		return value
			.replace(/(?!\.)\D/g, "")
			.replace(/(?<=\..*)\./g, "")
			.replace(/(?<=\.\d\d).*/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	} else {
		return "";
	}
};

export const amountFormatter = (value: string) => {
	return Number(value.replace(/[^\d.]/g, ""));
};
