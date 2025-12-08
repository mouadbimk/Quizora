import { useDispatch, useSelector } from "react-redux";
import styles from "../../pages/QuizStart.module.css";
import Timer from "../../components/Timer";
import Options from "../../components/Options";

import { goToNext, updateTimer } from "./quizSlice";
import Button from "../../components/Button";
import { useCallback } from "react";

function StartScreen() {
  const { quiz, secondRemaining, index, questions, answer, status } =
    useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const hasAnswer = answer !== null;
  const handleTimer = useCallback(() => {
    dispatch(updateTimer());
  }, [dispatch]);

  return (
    <>
      <div className={styles.header}>
        <h2>{quiz.title}</h2>
        <Timer secondRemaining={secondRemaining} onTimerChange={handleTimer} />
      </div>
      <div className={styles.progress}>
        <p>
          Question {index + 1} of {questions.length}
        </p>
        <progress max={questions.length - 1} value={index} />
      </div>
      <div className={styles.question}>
        <div className={styles.questionCover}>
          <h3>{questions[index].question}</h3>
        </div>
        <Options />
        <div className={styles.controls}>
          {hasAnswer && (
            <Button type={"primary"} onClick={() => dispatch(goToNext())}>
              {index + 1 < questions.length ? "Next" : "Finish"}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default StartScreen;
