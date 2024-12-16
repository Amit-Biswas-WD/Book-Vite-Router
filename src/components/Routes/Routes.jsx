import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import ListedBooks from "../ListedBooks/ListedBooks";
import PageRead from "../PageRead/PageRead";
import ErrorPage from "../ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/listedBooks",
          element: <ListedBooks/>
        },
        {
          path: "/pageRead",
          element: <PageRead/>
        }
      ]
    },
  ]);