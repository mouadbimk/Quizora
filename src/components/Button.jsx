import { Link } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ children, type, onClick, linkTo }) {
  if (linkTo)
    return (
      <Link to={linkTo} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
