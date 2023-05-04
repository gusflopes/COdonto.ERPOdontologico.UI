import { saveToken } from "../useToken";
import { api } from './index';

// const ValidateToken = async (token: string) => {};


export const  authSignup = async (nome: string, email: string, senha: string) => {
  await api.post("/auth/signup", { nome, email, senha });
};

export const authSignin = async (email: string, senha: string) => {
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