import { replace, useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./QuizeItem.module.css";
function QuizeItem({ difficulty = "easy" }) {
  const navigate = useNavigate();
  return (
    <div className={styles.quizeItem}>
      <div className={styles.information}>
        <span className={styles.category}>Technology</span>
        <span className={`${styles.difficulty} ${styles[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      <h2>React Fundamentals</h2>
      <p>5 questions</p>
      <Button
        type={"quizBtn"}
        onClick={() =>
          navigate(
            `/quiz-detail/${crypto
              .randomUUID()
              .slice(0, 7)}?diffiuclty=${difficulty}&questions=5`
          )
        }
      >
        View Quiz
      </Button>
    </div>
  );
}

export default QuizeItem;
