import QuizeItem from "./QuizeItem";
export default function QuizzesList({ quizzes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-3 items-center justify-center">
      {quizzes &&
        quizzes.map((quize) => (
          <QuizeItem
            quize={quize}
            difficulty={quize.difficulty}
            key={quize.id}
          />
        ))}
    </div>
  );
}
