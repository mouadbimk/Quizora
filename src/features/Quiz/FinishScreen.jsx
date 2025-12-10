import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { restart } from "./quizSlice";
import { useEffect } from "react";
import { useSetLocalStorage } from "../../hooks/useLocalStorage";
function FinishedScreen() {
  const { points, quiz, highscore, index, status } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const r = 80;
  const circumference = 2 * Math.PI * r;
  const totalPoints = quiz.questions.reduce((t, c) => c.points + t, 0);
  const progress = points / totalPoints; // 60%
  const [results, setResults] = useSetLocalStorage("quiz-result", []);
  useEffect(() => {
    return () => {
      const newResult = {
        points,
        quiz,
        highscore,
        index,
        totalQuestions: quiz.questions,
        status,
        date: new Date().toISOString(),
      };
      setResults((prev) => [...prev, newResult]);
    };
  }, []);
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-2xl mb-8 text-gray-600">Quiz Completed!</h2>
      <p className="text-[1.2rem] text-gray-500 mb-4 text-center">
        Here's how you performed on the "{quiz.title}" quiz.
      </p>
      <div className="w-50 h-50 mx-auto relative mb-8">
        <svg viewBox="0 0 200 200" width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r={r}
            stroke="#eee"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r={r}
            stroke="#1c7ed6"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference} // محيط الدائرة
            strokeDashoffset={circumference * (1 - progress)} // 60%
            strokeLinecap="round"
            transform="rotate(-90 100 100)" // البداية من أعلى
          />
        </svg>
        <p className="absolute top-1/2 left-1/2 z-50 transform-[translate(-50%,-50%)]">
          <strong>
            {points}/ {totalPoints}
          </strong>
        </p>
      </div>
      <p className="text-sm text-gray-600 mb-8">Highscore: {highscore}</p>
      <div className="flex items-center justify-center gap-5 mb-8">
        <Button type={"primary"} onClick={() => dispatch(restart())}>
          Try Again
        </Button>
        <Button type={"previousBtn"} linkTo={"/quizzes"}>
          View Other Quizzes
        </Button>
      </div>
    </div>
  );
}

export default FinishedScreen;
