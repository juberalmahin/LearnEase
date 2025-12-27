import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api", // replace with your backend URL
    withCredentials: true // important for session cookies
});

export default api;
