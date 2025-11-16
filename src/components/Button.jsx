import styles from "./Button.module.css";
function Button({ children, type, onClick, correct }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
