import AppNav from "../components/AppNav";
import styles from "./Quizzes.module.css";
import QuizzesList from "../components/QuizzesList";
import Loader from "../components/Loader";
function Quizzes({ isLoading, quizzes }) {
  const categories = quizzes.reduce((arr, quiz) => {
    if (!arr.map((el) => el.category).includes(quiz.category))
      return [...arr, quiz.category];
    else return arr;
  }, []);
  const levels = [...new Set(quizzes.map((q) => q.difficulty))];
  return (
    <>
      <AppNav />
      <div className={styles.quizzes}>
        <h1>Browse Quizzes</h1>
        {isLoading && <Loader />}
        {!quizzes.length === 0 && <p>No Quizzes now.</p>}
        {quizzes.length > 0 && (
          <>
            <div className={styles.box_search}>
              <input type="text" name="search" placeholder="Search..." />
              <div className={styles.filter}>
                <div className={styles.select}>
                  <label>Category</label>
                  <select name="category">
                    <option value={"all"}>All categories</option>
                    {categories.map((category, i) => (
                      <option value={category} key={i}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.select}>
                  <label>Difficulty</label>
                  <select name="difficulty">
                    <option value={"all"}>All difficulties</option>
                    {levels.map((level, i) => (
                      <option value={level} key={i}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <QuizzesList quizzes={quizzes} />
          </>
        )}
      </div>
    </>
  );
}

export default Quizzes;
