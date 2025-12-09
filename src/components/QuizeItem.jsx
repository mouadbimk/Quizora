import { useNavigate } from "react-router-dom";
import Button from "./Button";
function QuizeItem({ difficulty = "easy", quize }) {
  const navigate = useNavigate();
  const numQuestions = quize.questions.length;
  const stylesDiffuclty = {
    easy: "text-green-600 bg-green-100",
    hard: "text-red-600 bg-red-100",
    medium: "text-orange-600 bg-yellow-100",
  };
  const query = new URLSearchParams({
    difficulty,
    questions: numQuestions,
    title: quize.title,
    duration: quize.duration,
    category: quize.category,
    description: quize.description,
  }).toString();
  return (
    <div className="bg-sky-50 px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-xl rounded-xl">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-sky-600">
          {quize.category[0].toUpperCase() + quize.category.slice(1)}
        </span>
        <span
          className={`text-sm capitalize py-1 px-2 font-medium rounded-md tracking-wide ${stylesDiffuclty[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>
      <h2 className="text-xl text-gray-800 text-left mb-3">{quize.title}</h2>
      <p className="text-sm capitalize mb-3 text-gray-500 text-left">
        {numQuestions} questions
      </p>
      <Button
        type={"quizBtn"}
        onClick={() => navigate(`/quiz-detail/${quize.id}?${query}`)}
      >
        View Quiz
      </Button>
    </div>
  );
}

export default QuizeItem;
