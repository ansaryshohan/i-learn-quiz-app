import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import QuizPage from "../Components/QuizPage/QuizPage";
import Statistics from "../Components/Statistics/Statistics";
import Topics from "../Components/Topics/Topics";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: ([
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>,
      },
      {
        path: 'topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>,
      },
      {
        path:'/topic/:topicId',
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
        element: <QuizPage></QuizPage>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
    ]),

  },
])