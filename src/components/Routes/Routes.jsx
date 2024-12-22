import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ListedBooks from "../ListedBooks/ListedBooks";
import PageRead from "../PageRead/PageRead";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedBooks/:bookId",
        loader: () => fetch("/fakedata.json"),
        element: <ListedBooks />,
      },
      {
        path: "/pageRead",
        element: <PageRead />,
      },
    ],
  },
]);
