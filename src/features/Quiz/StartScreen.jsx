import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import Timer from "../../components/Timer";
import Options from "../../components/Options";
import Button from "../../components/Button";

import { goToNext, updateTimer } from "./quizSlice";

function StartScreen() {
  const { quiz, secondRemaining, index, questions, answer } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const hasAnswer = answer !== null;
  const handleTimer = useCallback(() => {
    dispatch(updateTimer());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between mb-8 px-4">
        <h2 className="text-xl text-gray-700">{quiz.title}</h2>
        <Timer secondRemaining={secondRemaining} onTimerChange={handleTimer} />
      </div>
      <div className="flex flex-col gap-5 mb-8 px-4">
        <p className="text-sm text-gray-500">
          Question {index + 1} of {questions.length}
        </p>
        <progress
          max={questions.length - 1}
          value={index}
          className="w-full h-5 appearance-none overflow-hidden progress"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <div className="bg-[#e9ecef] w-full h-50 flex items-center justify-center border border-gray-300 shadow-md rounded-xl">
          <h3 className="text-3xl font-semibold text-center">
            {questions[index].question}
          </h3>
        </div>
        <Options />
        <div className="flex flex-col sm:flex-row items-center justify-end w-full">
          {hasAnswer && (
            <Button type={"primary"} onClick={() => dispatch(goToNext())}>
              {index + 1 < questions.length ? "Next" : "Finish"}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default StartScreen;
