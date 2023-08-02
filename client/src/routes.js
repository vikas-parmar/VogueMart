import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import { CartMenu, Checkout, Confirmation, Home, ItemDetails } from "Pages";
import { Footer, Navbar } from "components";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <CartMenu />
      <Footer />
    </>
  );
};
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/item/:itemId",
        element: <ItemDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout/success",
        element: <Confirmation />,
      },
    ],
  },
]);
