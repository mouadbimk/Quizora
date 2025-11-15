import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quizzes from "./pages/Quizzes";
import QuizDetail from "./pages/QuizDetail";
import QuizStart from "./pages/QuizStart";
import QuizLayout from "./components/QuizLayout";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8800/quizzes";
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    async function fetchQuizzes() {
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setQuizzes(data);
      } catch (err) {
        throw new Error("Failed fetching!");
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuizzes();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="quizzes"
          element={<Quizzes quizzes={quizzes} isLoading={isLoading} />}
        />
        <Route path="quiz-detail" element={<QuizLayout />}>
          <Route path=":id" element={<QuizDetail />} />
          <Route path=":id/start" element={<QuizStart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
