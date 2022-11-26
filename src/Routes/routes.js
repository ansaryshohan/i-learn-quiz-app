import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Statistics from "../Components/Statistics/Statistics";
import Topics from "../Components/Topics/Topics";
import Main from "../Layouts/Main";

export const router= createBrowserRouter([
  {
    path:'/',
    errorElement: <ErrorPage></ErrorPage>,
   element:<Main></Main>,
   children:([
    {
      path:'/',
      element: <Topics></Topics>,
    },
    {
      path:'topics',
      element: <Topics></Topics>,
    },
    {
      path:'statistics',
      element: <Statistics></Statistics>,
    },
    {
      path:'blog',
      element: <Blog></Blog>,
    },
    {
      path:'about',
      element: <About></About>,
    },
   ]),
   
  },
])