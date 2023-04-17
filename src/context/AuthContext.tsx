"use client";
import { createContext, useState } from "react";

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  // checkToken: () => string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(checkToken);
  // const {signin, signup} = useApi();

  function login(token: string) {
    if (!token) return;
    localStorage.setItem("token", token);
    return setToken(token);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    return (window.location.href = "/");
  }

  function checkToken() {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token;
    }
    return null;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
