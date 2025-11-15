import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./QuizeItem.module.css";
function QuizeItem({ difficulty = "easy", quize }) {
  const navigate = useNavigate();
  const numQuestions = quize.questions.length;
  return (
    <div className={styles.quizeItem}>
      <div className={styles.information}>
        <span className={styles.category}>
          {String(quize.category).charAt(0).toUpperCase() +
            String(quize.category).slice(1)}
        </span>
        <span className={`${styles.difficulty} ${styles[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      <h2>{quize.title}</h2>
      <p>{numQuestions} questions</p>
      <Button
        type={"quizBtn"}
        onClick={() =>
          navigate(
            `/quiz-detail/${String(quize.title)
              .toLowerCase()
              .trim()
              .replaceAll(" ", "-")}?diffiuclty=${difficulty}&questions=5`
          )
        }
      >
        View Quiz
      </Button>
    </div>
  );
}

export default QuizeItem;
