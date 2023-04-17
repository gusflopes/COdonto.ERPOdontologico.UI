import { createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import { Agendamentos } from "./pages/dashboard/agendamentos";
import Dentistas from "./pages/dashboard/dentistas";
import Pacientes from "./pages/dashboard/pacientes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dentistas",
        element: <Dentistas />,
      },
      {
        path: "pacientes",
        element: <Pacientes />,
      },
      {
        path: "agendamentos",
        element: <Agendamentos />,
      },
    ],
  },
]);
