import axios from "axios";
import { getToken, saveToken } from "./useToken";

const api = axios.create({
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
  ValidateToken: async (token: string) => {},

  signup: async (nome: string, email: string, senha: string) => {
    await api.post("/auth/signup", { nome, email, senha });
  },

  signin: async (email: string, senha: string) => {
    const response = await api.post("/auth/signin", { email, senha });
    saveToken(response.data.token);

    return {
      usuario: {
        id: response.data.usuario.id,
        nome: response.data.usuario.nome,
        email: response.data.usuario.email,
        avatarUrl: response.data.usuario.avatarUrl,
      },
      token: response.data.token,
      expiration: response.data.expiration,
    };
  },
});
