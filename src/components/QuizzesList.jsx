import QuizeItem from "./QuizeItem";
import styles from "./QuizzesList.module.css";
export default function QuizzesList() {
  return (
    <div className={styles.quizzesList}>
      <QuizeItem difficulty="easy" />
      <QuizeItem difficulty="medium" />
      <QuizeItem />
      <QuizeItem difficulty="hard" />
    </div>
  );
}
