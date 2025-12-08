import Button from "../components/Button";
import styles from "./HomePage.module.css";
function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.icon}>
        <svg width="50" height="50">
          <use href="/icons.svg#question"></use>
        </svg>
      </div>
      <h1>Welcome to the Quiz Platform</h1>
      <p>
        Challenge yourself with our collection of quizzes on various topics.
        Sharpen your mind and learn something new today!
      </p>
      <Button type="primary" linkTo={"/quizzes"}>
        Start Quizzes
      </Button>
    </div>
  );
}

export default Home;
