import QuizeItem from "./QuizeItem";
import styles from "./QuizzesList.module.css";
export default function QuizzesList({ quizzes }) {
  return (
    <div className={styles.quizzesList}>
      {quizzes &&
        quizzes.map((quize) => (
          <QuizeItem
            quize={quize}
            difficulty={quize.difficulty}
            key={quize.id}
          />
        ))}
    </div>
  );
}
