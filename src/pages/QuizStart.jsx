import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import styles from "./QuizStart.module.css";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Options from "../components/Options";
import FinishedScreen from "../components/FinishedScreen";

const initialState = {
  questions: [],
  // 'loading','error','ready','active','finished'
  status: "loading",
  quiz: {},
  index: 0,
  points: 0,
  answer: null,
  highscore: 0,
  secondRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        quiz: action.payload,
        questions: action.payload.questions,
      };
    case "dataFetching":
      return { ...state, status: "loading" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "nextQuestion":
      if (state.index + 1 < state.questions.length)
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };
      else
        return {
          ...state,
          status: "finished",
          answer: null,
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
    case "finished":
      return {
        ...state,
        answer: null,
        status: "finished",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        quiz: state.quiz,
        questions: state.questions,
      };
    default:
      throw new Error("Unknown action");
  }
}

export default function QuizStart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, index, questions, quiz, answer, points, highscore } = state;
  const { id } = useParams();
  const hasAnswer = answer !== null;
  const handleNextQuestion = function () {
    if (index + 1 < questions.length) dispatch({ type: "nextQuestion" });
    else dispatch({ type: "finished" });
  };
  const handleAnswer = function (answer) {
    dispatch({ type: "newAnswer", payload: answer });
  };

  const handleRestart = function () {
    dispatch({ type: "restart" });
  };
  useEffect(() => {
    const controller = new AbortController();
    dispatch({ type: "dataFetching" });
    async function fetchQuiz() {
      try {
        const res = await fetch(`http://localhost:8800/quizzes?id=${id}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data[0] });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        // throw new Error("Failed fetching quiz!");
      }
    }
    fetchQuiz();
    return function () {
      controller.abort();
    };
  }, [id]);
  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "error" && <p>Failed fetching!</p>}
      {status === "ready" && (
        <Button type={"primary"} onClick={() => dispatch({ type: "start" })}>
          Start
        </Button>
      )}
      {status === "active" && (
        <>
          <div className={styles.header}>
            <h2>{quiz.title}</h2>
            <span className={styles.timer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <strong>13:00</strong>
            </span>
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
            <Options
              question={questions[index]}
              answer={answer}
              onAnswer={handleAnswer}
            />
            <div className={styles.controls}>
              <Button type={"previousBtn"}>Previous</Button>
              {hasAnswer && (
                <Button type={"primary"} onClick={handleNextQuestion}>
                  {index + 1 < questions.length ? "Next" : "Finish"}
                </Button>
              )}
            </div>
          </div>
        </>
      )}
      {status === "finished" && (
        <FinishedScreen
          points={points}
          quiz={quiz}
          onRestart={handleRestart}
          highscore={highscore}
        />
      )}
    </div>
  );
}
