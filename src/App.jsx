import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quizzes from "./pages/Quizzes";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="quizzes" element={<Quizzes />} />
      </Routes>
    </BrowserRouter>
  );
}
