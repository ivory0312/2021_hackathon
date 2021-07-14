import { SERVER } from "../config/config.json";
import axios from "axios";

const customAxios = axios.create({
  baseURL: SERVER,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsImlhdCI6MTYyNjIxOTk5NywiZXhwIjoxNjI2ODI0Nzk3fQ.w1-u1N_OVtaHR4SGNSU00h4I61p8CqE-BrsBpSViWEQ",
  },
});

export default customAxios;
