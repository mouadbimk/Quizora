import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./QuizeItem.module.css";
function QuizeItem({ difficulty = "easy", quize }) {
  const navigate = useNavigate();
  const numQuestions = quize.questions.length;
  const query = new URLSearchParams({
    difficulty,
    questions: numQuestions,
    title: quize.title,
    duration: quize.duration,
    category: quize.category,
    description: quize.description,
  }).toString();
  return (
    <div className={styles.quizeItem}>
      <div className={styles.information}>
        <span className={styles.category}>
          {quize.category[0].toUpperCase() + quize.category.slice(1)}
        </span>
        <span className={`${styles.difficulty} ${styles[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      <h2>{quize.title}</h2>
      <p>{numQuestions} questions</p>
      <Button
        type={"quizBtn"}
        onClick={() => navigate(`/quiz-detail/${quize.id}?${query}`)}
      >
        View Quiz
      </Button>
    </div>
  );
}

export default QuizeItem;
