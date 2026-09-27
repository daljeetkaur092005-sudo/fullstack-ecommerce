import React from "react";
import Login from "../Features/Auth/UI/Pages/Login";
import Register from "../Features/Auth/UI/Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import ProductPage from "../Features/Auth/UI/Pages/ProductPage";
import PublicRoute from "./ProtectedRoute/PublicRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ProductCard from "../Features/Auth/UI/Components/ProductCard";

const AppRoute = () => {
  const router = createBrowserRouter([
{
  path:"/",
  element:<PublicRoute/>,
  children:[
     {
      path: "/",
      element: <AuthLayout/>,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]

},

{
  path:"",
  element:<ProtectedRoute/>,
  children:[
     {
      path: "main",
      element: <MainLayout />,
      children:[
        {
            path:"",
            element:<ProductPage/>

        },{
          path:"product",
          element:<ProductCard/>
        }
      ]
    },
  ]
}





  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
