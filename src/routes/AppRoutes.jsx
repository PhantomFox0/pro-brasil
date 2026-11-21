import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Curriculo from "../pages/Curriculo";
import Vagas from "../pages/Vagas";
import Perfil from "../pages/Perfil";
import Error from "../pages/Error";

function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
  
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "curriculo",
        element: <Curriculo />,
      },
      {
        path: "vagas",
        element: <Vagas />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;