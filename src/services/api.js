import axios from "axios";

const api = axios.create({
  baseURL: "https://mejorconsalud.com/wp-json/mc/v1/"
});

export default api;
