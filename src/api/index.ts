import axios from "axios";
import * as types from "./../types";

// Add a request interceptor
axios.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	(response) => {
		if (response.data.code === 200) {
			return response.data.data;
		}
		// Do something with response data
		return [];
	},
	(error) => {
		// Do something with response error
		return Promise.reject(error);
	}
);

function getBookList(): Promise<[]> {
	return axios.get("https://www.apiopen.top/novelApi");
}
function searchBookByName(keywords: string): Promise<types.Book> {
	return axios.get("https://www.apiopen.top/novelInfoApi?name=" + keywords);
}

export { getBookList, searchBookByName };
