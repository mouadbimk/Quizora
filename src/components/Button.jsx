import styles from "./Button.module.css";
function Button({ children, type, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
