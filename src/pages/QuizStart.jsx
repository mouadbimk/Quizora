import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import styles from "./QuizStart.module.css";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Options from "../components/Options";
import FinishedScreen from "../components/FinishedScreen";
import Timer from "../components/Timer";
// Initial State
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
// Reducer function
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
      console.log(action.payload);
      return { ...state, status: "active", secondRemaining: action.payload };
    case "nextQuestion":
      const isLast = state.index + 1 === state.questions.length;

      if (!isLast)
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };

      return {
        ...state,
        status: "finished",
        answer: null,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
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
        status: "active",
        quiz: state.quiz,
        questions: state.questions,
        highscore: state.highscore,
        secondRemaining: action.payload,
      };
    case "trick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining > 0 ? state.status : "finished",
      };
    default:
      throw new Error("Unknown action");
  }
}

export default function QuizStart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    status,
    index,
    questions,
    quiz,
    answer,
    points,
    highscore,
    secondRemaining,
  } = state;
  const { id } = useParams();
  const TIME_OF_QUESTIONS = quiz.duration * 60;

  const hasAnswer = answer !== null;
  // Event Handlers
  const handleNextQuestion = function () {
    dispatch({ type: "nextQuestion" });
  };
  const handleAnswer = function (answer) {
    dispatch({ type: "newAnswer", payload: Number(answer) });
  };

  const handleRestart = function () {
    dispatch({ type: "restart", payload: TIME_OF_QUESTIONS });
  };
  const handleTimer = function () {
    dispatch({ type: "trick" });
  };
  // Data Fetching
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
      }
    }

    fetchQuiz();
    //clean old requests before making a new one
    return () => controller.abort();
  }, [id]);

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "error" && <p>Failed fetching!</p>}
      {status === "ready" && (
        <Button
          type={"primary"}
          onClick={() =>
            dispatch({ type: "start", payload: TIME_OF_QUESTIONS })
          }
        >
          Start
        </Button>
      )}

      {status === "active" && (
        <>
          <div className={styles.header}>
            <h2>{quiz.title}</h2>
            <Timer
              secondRemaining={secondRemaining}
              onTimerChange={handleTimer}
            />
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
