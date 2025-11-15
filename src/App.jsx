import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quizzes from "./pages/Quizzes";
import QuizDetail from "./pages/QuizDetail";
import QuizStart from "./pages/QuizStart";
import QuizLayout from "./components/QuizLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="quiz-detail" element={<QuizLayout />}>
          <Route path=":id" element={<QuizDetail />} />
          <Route path="start" element={<QuizStart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
