import axios from "axios";

const api = axios.create({
	baseURL:
		process.env.REACT_APP_URL ||
		"https://clutch-interview-service.herokuapp.com/",
	headers: {
		"Content-Type": "application/json"
	}
});

export default api;
