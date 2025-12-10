import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../features/Quiz/quizSlice";
function Options() {
  const dispatch = useDispatch();
  const { answer, questions, index } = useSelector((state) => state.quiz);
  const hasAnswer = answer !== null;
  const question = questions.at(index);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-2">
      {question.options.map((option, i) => (
        <button
          className={`bg-[#fffe] border-2 border-gray-300 w-full inline-block text-sm py-3 px-4 transition-all duration-300 rounded-xl text-gray-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75 font-semibold ${
            hasAnswer
              ? i === question.correctAnswer
                ? "border-green-600 text-green-600"
                : "border-red-600 text-red-600"
              : null
          } ${i === answer ? "bg-gray-300 border-gray-400 text-gray-500" : ""}`}
          onClick={() => dispatch(addAnswer(i))}
          disabled={hasAnswer}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
