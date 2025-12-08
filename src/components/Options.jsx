import { useDispatch, useSelector } from "react-redux";
import styles from "./Options.module.css";
import { addAnswer } from "../features/Quiz/quizSlice";
function Options() {
  const dispatch = useDispatch();
  const { answer, questions, index } = useSelector((state) => state.quiz);
  const hasAnswer = answer !== null;
  const question = questions.at(index);
  return (
    <div className={styles.answers}>
      {question.options.map((option, i) => (
        <button
          className={`btn answerBtn ${
            hasAnswer
              ? i === question.correctAnswer
                ? "correct"
                : "incorrect"
              : ""
          } ${i === answer ? "answer" : ""}`}
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
