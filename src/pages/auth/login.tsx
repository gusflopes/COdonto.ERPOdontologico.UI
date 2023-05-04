import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import loginBackground from "../../../public/images/login-background.png";
import { useContext } from "react";
import loginBackground from "../../assets/login-background.png";
import { AuthContext } from "../../context/AuthContext";
import { useApi } from "../../hooks/useApi";
// import { Container } from './styles';

type FormData = {
  Email: string;
  Senha: string;
};

const Login: React.FC = () => {
  const { authSignin } = useApi();
  const { isAuthenticated } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await authSignin(data.Email, data.Senha);
      if (response) {
        console.log(response);
        toast.success("Logado com sucesso!");
        isAuthenticated(response.token);
      }
    } catch (error) {
      toast.error("Falha na autenticação.");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-screen items-stretch">
        <div className="flex w-full max-w-screen-sm flex-col justify-center">
          <div className="flex animate-appear-from-left flex-col items-center justify-center">
            <img src={"/images/hublaw-logo.png"} className="h-auto max-w-xs" />
            <div className="mt-8 flex w-64 flex-col justify-center">
              {/* <label className="mb-1 mt-4 text-base">Digite seu e-mail</label> */}
              <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Digite seu e-mail
              </label>
              <input
                className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6
                ${errors.Email ? "ring-red-600" : null}`}
                type="text"
                placeholder="email@dominio.com"
                {...register("Email", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido",
                  },
                })}
              />
              {errors.Email && (
                <p className="mt-0.5 text-xs text-red-600" id="email-error">
                  {errors.Email.message?.toString()}
                </p>
              )}

              <label
                htmlFor="Senha"
                className="mt-2 block text-sm font-medium leading-6 text-gray-900"
              >
                Digite sua senha
              </label>
              <input
                placeholder="********"
                className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6
                ${errors.Senha ? "ring-red-600" : null}`}
                type="password"
                {...register("Senha", { required: "Senha obrigatória" })}
              />
              {errors.Senha && (
                <p className="mt-0.5 text-xs text-red-600" id="email-error">
                  {errors.Senha.message?.toString()}
                </p>
              )}
              {/* <button
                type="submit"
                className="mt-6 w-64 flex-1 rounded-md bg-green-300  pb-3 pt-3 text-lg font-bold text-gray-700 hover:bg-green-400"
              >
                ENTRAR
              </button> */}
              <div className="">
                <button
                  type="submit"
                  className="ctaButton mb-6 mt-6 w-64 flex-1 rounded-md pb-2 pt-2 text-lg font-bold text-gray-600"
                >
                  ENTRAR
                </button>
              </div>

              <span className="text-xs text-gray-500">
                Não tem conta, então vaza! Ainda não estamos aceitando novos
                clientes.
              </span>
            </div>
          </div>
        </div>
        <div
          className="hidden flex-1 bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: `url(${loginBackground})`,
          }}
        ></div>
      </div>
    </form>
  );
};

export default Login;
