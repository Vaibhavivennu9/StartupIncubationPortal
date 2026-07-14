import axios from "axios";

const api = axios.create({
 baseURL: "http://10.17.224.170:5000/api",
});

export default api;