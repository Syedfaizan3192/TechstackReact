import api from ".";
import { apiUrl, constant } from "../constants/constants";

export const getAllData = (params) => api.get(`${constant.VER}${apiUrl.product}`, { params });
