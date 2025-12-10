import { useParams, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import BoxInfo from "../components/BoxInfo";
function QuizDetail() {
  const { quizId } = useParams();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const difficulty = searchParams.get("difficulty");
  const numQuestions = searchParams.get("questions");
  const duration = searchParams.get("duration");
  const category = searchParams.get("category");
  const description = searchParams.get("description");

  return (
    <div className="bg-white p-6 shadow-xl rounded-xl">
      <Button type={"backLink"} linkTo={"/quizzes"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Back to Quizzes
      </Button>
      <h2 className="text-3xl my-4 mt-6 text-gray-800 text-center">{title}</h2>
      <p className="text-[1.08rem] text-center mb-7 mx-auto text-gray-600 sm:max-w-1/2">
        {description}
      </p>
      <div className="flex sm:flex-row flex-wrap items-center justify-center gap-5 mb-8">
        <BoxInfo title={"Category"} placeholder={category}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6Z"
          />
        </BoxInfo>
        <BoxInfo title={"Questions"} placeholder={numQuestions}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </BoxInfo>
        <BoxInfo title={"Duration"} placeholder={`${duration} min`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </BoxInfo>
        <BoxInfo
          title={"Difficulty"}
          placeholder={difficulty}
          type={difficulty}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </BoxInfo>
      </div>
      <div className="flex items-center justify-center mb-10">
        <Button type={"primary"} linkTo={`../${quizId}/start`}>
          Start Quiz Now
        </Button>
      </div>
    </div>
  );
}

export default QuizDetail;
