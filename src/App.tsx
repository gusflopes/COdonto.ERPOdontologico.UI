import { RouterProvider } from "react-router-dom";
import { Notification } from "./components/notification";
import { AuthProvider } from "./context/AuthContext";

import { router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <Notification />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
