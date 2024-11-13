import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import AddBook from "./Routes/addBook";
import WrongPage from "./Routes/wrongPage";
import Layout from "./Layout";
import BookPreview from "./Routes/BookPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/:bookName", element: <BookPreview></BookPreview> },
      {
        path: "/add-book",
        element: <AddBook></AddBook>,
      },
    ],
  },
  {
    path: "/*",
    element: <WrongPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
