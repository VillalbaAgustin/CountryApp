import axios from "axios";

export const countryApi = axios.create({
  baseURL: "http://localhost:3001",
});
