import { Link } from "react-router-dom";
// import styles from "./Button.module.css";
const base =
  "inline-block font-rubik font-medium cursor-pointer border transition-all duration-300 ";

function Button({ children, type, onClick, linkTo }) {
  const styles = {
    primary:
      base +
      "bg-sky-500 text-white hover:bg-sky-200 hover:text-sky-600 border-sky-500 py-3 px-4 text-xl rounded-xl",
    quizBtn:
      base +
      "bg-[#fffe] border-gray-400 w-full py-2 text-md rounded-lg text-gray-400 hover:text-gray-500 hover:border-gray-500 ",
    backLink:
      "flex text-gray-500 items-center gap-1 leading-0 mb-2 hover:text-sky-500 transition-all duration-300",
    previousBtn:
      base +
      "bg-[#fffe] border-gray-400 w-fit text-[1rem] text-gray-600 py-2.5 px-4 transition-all duration-300 hover:bg-gray-200 rounded-xl",
  };
  if (linkTo)
    return (
      <Link to={linkTo} className={`${styles[type]}`}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
