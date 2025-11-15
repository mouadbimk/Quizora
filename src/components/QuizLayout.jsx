import styles from "./QuizLayout.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function QuizLayout() {
  return (
    <>
      <AppNav />
      <div className={styles.quizDetail}>
        <Outlet />
      </div>
    </>
  );
}

export default QuizLayout;
