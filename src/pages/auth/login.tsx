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
      <div className="flex items-stretch h-screen">
        <div className="flex flex-col justify-center w-full max-w-screen-sm">
          <div className="flex flex-col items-center justify-center animate-appear-from-left">
            <img src={"/images/hublaw-logo.png"} className="h-auto max-w-xs" />
            <div className="flex flex-col justify-center w-64 mt-8">
              <label className="text-base mt-4 mb-1">Digite seu e-mail</label>
              <input
                className="text-base p-1 rounded-md border-2 active:border-red-600 "
                {...register("Email")}
              />
              <label className="text-base mt-4 mb-1">Digite sua senha</label>
              <input
                className="text-base p-1 rounded-md border-2 active:border-red-600 "
                {...register("Senha")}
              />

              <button
                type="submit"
                className="mt-6 bg-green-300 flex-1 w-64 text-lg hover:bg-green-400 pt-3 pb-3 rounded-md font-bold"
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
          className="flex-1 bg-cover bg-no-repeat bg-center hidden md:block"
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
