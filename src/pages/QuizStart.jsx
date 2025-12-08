import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./QuizStart.module.css";
import Button from "../components/Button";
import { getQuiz } from "../services/apiQuizzes";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, resetQuiz } from "../features/Quiz/quizSlice";
import StartScreen from "../features/Quiz/StartScreen";
import FinishScreen from "../features/Quiz/FinishScreen";

export default function QuizStart() {
  const dispatch = useDispatch();
  const quiz = useLoaderData();
  const TIME_OF_QUESTIONS = quiz.duration * 60;
  const { status: statusQuiz } = useSelector((state) => state.quiz);
  const { title } = quiz;

  // handle document title
  useEffect(() => {
    document.title = `Quizora - ${title}`;

    return () => {
      document.title = `Quizora – React-Powered Quiz Application`;
      dispatch(resetQuiz());
    };
  }, [title]);

  return (
    <div className={styles.container}>
      {statusQuiz === "ready" && <StartScreen />}

      {statusQuiz === "idle" && (
        <div className={styles.information}>
          <h2 className={styles.title}>{quiz.title}</h2>
          <Button
            type={"primary"}
            onClick={() =>
              dispatch(addQuiz({ quiz, timer: TIME_OF_QUESTIONS }))
            }
          >
            Start
          </Button>
        </div>
      )}
      {statusQuiz === "finished" && <FinishScreen />}
    </div>
  );
}
export async function Loader({ params }) {
  const quiz = await getQuiz(params.quizId);
  return quiz;
}
