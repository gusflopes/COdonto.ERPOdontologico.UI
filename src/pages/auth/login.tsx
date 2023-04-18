import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import loginBackground from "../../../public/images/login-background.png";
import loginBackground from "../../assets/login-background.png";

// import { Container } from './styles';

type FormData = {
  Email: string;
  Senha: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    toast.error("Quase lá!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-screen items-stretch">
        <div className="flex w-full max-w-screen-sm flex-col justify-center">
          <div className="flex animate-appear-from-left flex-col items-center justify-center">
            <img src={"/images/hublaw-logo.png"} className="h-auto max-w-xs" />
            <div className="mt-8 flex w-64 flex-col justify-center">
              <label className="mb-1 mt-4 text-base">Digite seu e-mail</label>
              <input
                className="rounded-md border-2 p-1 text-base active:border-red-600 "
                {...register("Email")}
              />
              <label className="mb-1 mt-4 text-base">Digite sua senha</label>
              <input
                className="rounded-md border-2 p-1 text-base active:border-red-600 "
                {...register("Senha")}
              />

              <button
                type="submit"
                className="mt-6 w-64 flex-1 rounded-md bg-green-300 pb-3 pt-3 text-lg font-bold hover:bg-green-400"
              >
                ENTRAR
              </button>
              <span>
                Não tem conta, então vaza! Ainda não estamos aceitand novos
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

      {/* <div className="flex bg-slate-500  flex-col items-center justify-center w-full h-screen">
        <h1 className="mt-2 leading-6 text-xl tracking-wide">
          Acessar sua conta
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 ">
          <div className="sm:col-span-3">TESTE</div>
          <div className="sm:col-span-3">TESTE</div>
          <div className="sm:col-span-3">TESTE</div>
          <div className="sm:col-span-3">TESTE</div>
        </div>
        <span>Email</span>
        <span>Password</span>
        <span>Acessar</span>
        <span>Texto</span>
      </div> */}
    </form>
  );
};

export default Login;
