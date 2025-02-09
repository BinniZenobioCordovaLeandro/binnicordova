import * as mockData from "./mock/data.json";

export const api = {
	getPersonData: async () => {
		try {
			const response = mockData;
			const data = response.data;
			return data;
		} catch (error) {
			console.error(error);
		}
	},
};
