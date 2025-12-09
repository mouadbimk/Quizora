import QuizzesList from "../components/QuizzesList";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getQuizzes } from "../services/apiQuizzes";
function Quizzes() {
  const quizzes = useLoaderData();
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const categories = [...new Set(quizzes.map((q) => q.category))];
  const levels = [...new Set(quizzes.map((q) => q.difficulty))];
  const [searchTerm, setSearchTerm] = useState("");
  const quizzesList = quizzes
    .filter((quiz) => quiz.category === category || category === "all")
    .filter((q) => q.difficulty === level || level === "all")
    .filter((q) => q.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    document.title = `Quizora - Quizzes`;

    return () => {
      document.title = `Quizora – React-Powered Quiz Application`;
    };
  }, []);
  return (
    <>
      <div className="mx-auto my-3 bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Browse Quizzes</h1>
        {quizzes.length === 0 && <p>No quizzes now.</p>}
        {quizzes.length > 0 && (
          <>
            <div className="py-4 px-6">
              <input
                type="text"
                name="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="input w-full border-gray-300 focus:border-sky-600 text-md my-3 py-2 px-4 rounded-md"
              />
              <div className="flex items-center justify-center w-full gap-3">
                <div className="flex-1">
                  <label className="block my-3 capitalize font-medium text-stone-600 text-center text-[1.1rem]">
                    Category
                  </label>
                  <select
                    className="px-3 py-2 w-full focus:outline-none border-2 border-sky-100 rounded-md capitalize block transition-all duration-300 focus-visible:border-sky-500 text-sm"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value={"all"}>All categories</option>
                    {categories.map((category, i) => (
                      <option value={category} key={i}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block my-3 capitalize font-medium text-stone-600 text-center text-[1.1rem]">
                    Difficulty
                  </label>
                  <select
                    className="px-3 py-2 w-full focus:outline-none border-2 border-sky-100 rounded-md capitalize block transition-all duration-300 focus-visible:border-sky-500 focus:shadow-xl text-sm"
                    name="difficulty"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value={"all"}>All difficulties</option>
                    {levels.map((level, i) => (
                      <option value={level} key={i}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <QuizzesList quizzes={quizzesList} />
          </>
        )}
      </div>
    </>
  );
}

export default Quizzes;
export async function Loader() {
  const { quizzes } = await getQuizzes();
  return quizzes;
}
