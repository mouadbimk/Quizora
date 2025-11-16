import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import styles from "./QuizDetail.module.css";
import Button from "../components/Button";
import { useEffect } from "react";
function QuizDetail() {
  const { id } = useParams();
  const [searchParams, setSerachParams] = useSearchParams();
  const title = searchParams.get("title");
  const difficulty = searchParams.get("difficulty");
  const numQuestions = searchParams.get("questions");
  const duration = searchParams.get("duration");
  const category = searchParams.get("category");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <>
      <Link to={"/quizzes"} className={styles.backLink}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Back to Quizzes
      </Link>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.details}>
        <div className={styles.boxInfo}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6Z"
              />
            </svg>
          </div>
          <span className={styles.categoryTitle}>Category</span>
          <span className={styles.categoryName}>{category}</span>
        </div>
        <div className={styles.boxInfo}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <span className={styles.categoryTitle}>Questions</span>
          <span className={styles.categoryName}>{numQuestions}</span>
        </div>
        <div className={styles.boxInfo}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <span className={styles.categoryTitle}>Duration</span>
          <span className={styles.categoryName}>{duration} min</span>
        </div>
        <div className={styles.boxInfo}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
          </div>
          <span className={styles.categoryTitle}>Difficulty</span>
          <span className={`${styles.diffiuclty} ${styles[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </div>
      <Button type={"primary"} onClick={() => navigate(`../${id}/start`)}>
        Start Quiz Now
      </Button>
    </>
  );
}

export default QuizDetail;
