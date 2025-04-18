export const calculateYear = (start: string, end?: string) => {
	const startDate = new Date(start);
	const endDate = end ? new Date(end) : new Date();
	const years = endDate.getFullYear() - startDate.getFullYear();
	const months = endDate.getMonth() - startDate.getMonth();
	return Math.round(years + months / 12);
};
