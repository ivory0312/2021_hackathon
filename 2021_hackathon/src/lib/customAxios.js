import { SERVER } from "../config/config.json";
import axios from "axios";

const customAxios = axios.create({
  baseURL: SERVER,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default customAxios;
