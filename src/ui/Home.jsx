import { useState } from "react";
import Button from "../components/Button";
function Home() {
  const [username, setUsername] = useState("");
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <div className="w-[100px] h-[100px] bg-sky-200 flex items-center justify-center rounded-xl mb-3 p-4">
        <svg width="50" height="50" className="w-full h-full">
          <use href="/icons.svg#question"></use>
        </svg>
      </div>
      <h1 className="text-6xl font-bold font-rubik max-w-150 text-center leading-15 my-2">
        Welcome to the Quiz Platform
      </h1>
      <p className="text-xl max-w-170 text-center leading-8 my-2 text-stone-600">
        Challenge yourself with our collection of quizzes on various topics.
        Sharpen your mind and learn something new today!
      </p>
      <input
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        id="username"
        placeholder="Enter your name to start..."
        className="input"
      />
      {username && (
        <Button type="primary" linkTo={"/quizzes"}>
          {username.toUpperCase()} &#45; Start the Quiz
        </Button>
      )}
    </div>
  );
}

export default Home;
