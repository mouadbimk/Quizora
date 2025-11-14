import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./HomePage.module.css";
import AppNav from "../components/AppNav";
function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <AppNav />
      <div className={styles.homePage}>
        <div className={styles.icon}>
          <svg width="50" height="50">
            <use href="src/assets/icons.svg#question"></use>
          </svg>
        </div>
        <h1>Welcome to the Quiz Platform</h1>
        <p>
          Challenge yourself with our collection of quizzes on various topics.
          Sharpen your mind and learn something new today!
        </p>
        <Button type="primary" onClick={() => navigate("quizzes")}>
          Start Quizzes
        </Button>
      </div>
    </>
  );
}

export default HomePage;
