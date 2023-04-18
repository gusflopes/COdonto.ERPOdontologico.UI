import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuth = () => {
    isAuthenticated("token");
    setTimeout(() => {
      navigate("/dashboard");
    }, 350);
  };

  return (
    <>
      <h1>HOME!</h1>
      <button onClick={handleAuth}>AUTHENTICATE</button>
      <br />
      <a href="/auth/login">LOGIN</a>
      <br />
      <button onClick={() => toast.error("SUCESSO!")}>TOAST!</button>
    </>
  );
}
