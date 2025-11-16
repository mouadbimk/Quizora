import styles from "./Options.module.css";
function Options({ question, answer, onAnswer }) {
  const hasAnswer = answer !== null;
  return (
    <div className={styles.answers}>
      {question.options.map((option, i) => (
        <button
          className={`btn answerBtn ${
            hasAnswer
              ? i === question.correctAnswer
                ? "correct"
                : "incorrect"
              : ""
          } ${i === answer ? "answer" : ""}`}
          onClick={() => onAnswer(i)}
          disabled={hasAnswer}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
