import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Topics from "../Components/Topics/Topics";
import Main from "../Layouts/Main";

export const router= createBrowserRouter([
  {
    path:'/',
    errorElement: <ErrorPage></ErrorPage>,
   element:<Main></Main>,
   children:([
    {
      path:'topics',
      element: <Topics></Topics>,
    }
   ]),
   
  },
])