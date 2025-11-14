import AppNav from "../components/AppNav";
import styles from "./Quizzes.module.css";
function Quizzes() {
  return (
    <>
      <AppNav />
      <div className={styles.quizzes}>
        <h1>Browse Quizzes</h1>
        <div className={styles.box_search}>
          <input type="text" name="search" placeholder="Search..." />
          <div className={styles.filter}>
            <div className={styles.select}>
              <label>Category</label>
              <select name="category">
                <option value={"all"}>All categories</option>
                <option value={"history"}>History</option>
                <option value={"technology"}>Technology</option>
                <option value={"science"}>Science</option>
              </select>
            </div>
            <div className={styles.select}>
              <label>Difficulty</label>
              <select name="difficulty">
                <option value={"all"}>All difficulties</option>
                <option value={"easy"}>Easy</option>
                <option value={"medium"}>Medium</option>
                <option value={"hard"}>Hard</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quizzes;
