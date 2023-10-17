import api from ".";
import { constant, apiUrl } from "../constants/constants";

export const LogIn = (data) => api.post(`${constant.VER}${apiUrl.signin}`, data)
export const Sign_UP = (data) => api.post(`${constant.VER}${apiUrl.register}`, data)
