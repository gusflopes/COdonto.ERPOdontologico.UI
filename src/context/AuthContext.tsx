"use client";
import { createContext, useState } from "react";
import { useApi } from "../hooks/useApi";

interface AuthContextProps {
  token: string | null;
  isAuthenticated: (token: string) => void;
  logout: () => void;
  checkToken: () => string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(checkToken);
  const { signin, signup } = useApi();

  function isAuthenticated(token: string) {
    if (!token) return;
    localStorage.setItem("token", token);
    setToken(token);
    return (window.location.href = "/dashboard");
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
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        logout,
        checkToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
