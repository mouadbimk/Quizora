import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>
        <svg width="50" height="50">
          <use href="src/assets/icons.svg#idea"></use>
        </svg>
      </div>
      <h1>Quizora</h1>
    </div>
  );
}

export default Logo;
