import styles from "./Quizzes.module.css";
import QuizzesList from "../components/QuizzesList";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getQuizzes } from "../services/apiQuizzes";
function Quizzes() {
  const quizzes = useLoaderData();
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const categories = [...new Set(quizzes.map((q) => q.category))];
  const levels = [...new Set(quizzes.map((q) => q.difficulty))];
  const [searchTerm, setSearchTerm] = useState("");
  const quizzesList = quizzes
    .filter((quiz) => quiz.category === category || category === "all")
    .filter((q) => q.difficulty === level || level === "all")
    .filter((q) => q.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    document.title = `Quizora - Quizzes`;

    return () => {
      document.title = `Quizora – React-Powered Quiz Application`;
    };
  }, []);
  return (
    <>
      <div className={styles.quizzes}>
        <h1>Browse Quizzes</h1>
        {quizzes.length === 0 && <p>No quizzes now.</p>}
        {quizzes.length > 0 && (
          <>
            <div className={styles.box_search}>
              <input
                type="text"
                name="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
              />
              <div className={styles.filter}>
                <div className={styles.select}>
                  <label>Category</label>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
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
                  <select
                    name="difficulty"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
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
            <QuizzesList quizzes={quizzesList} />
          </>
        )}
      </div>
    </>
  );
}

export default Quizzes;
export async function Loader() {
  const { quizzes } = await getQuizzes();
  return quizzes;
}
