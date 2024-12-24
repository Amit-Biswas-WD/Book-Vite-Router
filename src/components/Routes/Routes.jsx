import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import PageRead from "../PageRead/PageRead";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import BookDetails from "../BookDetails/BookDetails";
import ListedBooks from "../ListedBooks/ListedBooks";

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
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/fakedata.json"),
      },
      {
        path: "/books/:bookId",
        loader: () => fetch("/fakedata.json"),
        element: <BookDetails />,
      },
      {
        path: "/pageRead",
        element: <PageRead />,
      },
    ],
  },
]);
