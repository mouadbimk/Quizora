import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./FinishedScreen.module.css";
function FinishedScreen({ points, quiz, onRestart, highscore }) {
  const navigate = useNavigate();
  const r = 80;
  const circumference = 2 * Math.PI * r;
  const totalPoints = quiz.questions.reduce((t, c) => c.points + t, 0);
  const progress = points / totalPoints; // 60%

  return (
    <div className={styles.result}>
      <h2>Quiz Completed!</h2>
      <p className={styles.des}>
        Here's how you performed on the "{quiz.title}" quiz.
      </p>
      <div className={styles.progress}>
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
        <p className={styles.points}>
          <strong>
            {points}/ {totalPoints}
          </strong>
        </p>
      </div>
      <p className={styles.highscore}>Highscore: {highscore}</p>
      <div className={styles.btns}>
        <Button type={"primary"} onClick={onRestart}>
          Try Again
        </Button>
        <Button type={"previousBtn"} onClick={() => navigate("/quizzes")}>
          View Other Quizzes
        </Button>
      </div>
    </div>
  );
}

export default FinishedScreen;
