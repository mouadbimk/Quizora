import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Quizzes from "./ui/Quizzes";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import { Loader as quizzesLoader } from "./ui/Quizzes";
import { Loader as quizLoader } from "./pages/QuizStart";
import QuizDetail from "./pages/QuizDetail";
import QuizStart from "./pages/QuizStart";
export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/quizzes",
          loader: quizzesLoader,
          element: <Quizzes />,
        },
        { path: "/quiz-detail/:quizId", element: <QuizDetail /> },
        { path: "/:quizId/start", element: <QuizStart />, loader: quizLoader },
      ],
    },
  ]);

  return (
    <>
      <div className="background"></div>
      <RouterProvider router={router} />
    </>
  );
}
