import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.navLink}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/quizzes"}>Quizzes</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
