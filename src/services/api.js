import axios from "axios";

const api = axios.create({
  baseURL: "https://routewise-backend-fylq.onrender.com",
});

export default api;