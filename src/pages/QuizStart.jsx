import { useState } from "react";
import styles from "./QuizStart.module.css";
import Button from "../components/Button";

export default function QuizStart() {
  const [value, setValue] = useState(10);
  return (
    <div>
      <div className={styles.header}>
        <h2>React Fundamentals</h2>
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
        <p>Question 1 of 5</p>
        <progress max={20} value={value} />
      </div>
      <div className={styles.question}>
        <div className={styles.questionCover}>
          <h3>What is JSX?</h3>
        </div>
        <div className={styles.answers}>
          <Button type={"answerBtn"} active={true}>
            A JavaScript syntax extension
          </Button>
          <Button type={"answerBtn"}>A templating engine</Button>
          <Button type={"answerBtn"}>A CSS preprocessor</Button>
          <Button type={"answerBtn"}>A database query language</Button>
        </div>
        <div className={styles.controls}>
          <Button type={"answerBtn"} style={{ width: "fit-content" }}>
            Previous
          </Button>
          <Button type={"primary"}>Next</Button>
        </div>
      </div>
    </div>
  );
}
