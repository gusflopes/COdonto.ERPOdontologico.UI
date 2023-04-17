import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuth = () => {
    login("token");
    setTimeout(() => {
      navigate("/dashboard");
    }, 350);
  };

  return (
    <>
      <h1>HOME!</h1>
      <button onClick={handleAuth}>LOGIN</button>

      <button onClick={() => toast.error("SUCESSO!")}>TOAST!</button>
    </>
  );
}
