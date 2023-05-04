import axios from "axios";
import { getToken } from "../useToken";

import * as auth from "./auth";
import * as dentistas from "./dentistas";
import * as pacientes from "./pacientes";

export const api = axios.create({
  baseURL: "https://localhost:7279/api",
});

api.interceptors.request.use(async (requestConfig) => {
  const token = getToken();
  if (token) {
    // requestConfig.baseURL = `${requestConfig.baseURL}/api`;
    requestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return requestConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/";
      }, 10);
    }
    if (error.response.status === 400) {
      if (typeof error.response.data === "string") {
        // toast.error(error.response.data)
        console.error(error.response.data);
      }
    }
    if (error.response.status === 500) {
      // toast.error('Erro ao executar operação')
      console.error(error.response.data || "Erro ao executar operação");
    }
    return Promise.reject(error);
  }
);

export const useApi = () => ({
  ...dentistas,
  ...pacientes,
  ...auth,
});
