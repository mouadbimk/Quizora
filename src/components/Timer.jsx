import { useEffect } from "react";
import styles from "./Timer.module.css";
export default function Timer({ secondRemaining, onTimerChange }) {
  const minutes = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  useEffect(() => {
    const timer = setInterval(onTimerChange, 1000);
    return () => clearInterval(timer);
  }, [onTimerChange]);
  return (
    <span className={styles.timer}>
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
      <strong>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </strong>
    </span>
  );
}
