const BASE_URL = "/quizzes.json";
export async function getQuizzes() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed getting quizzes!");
  const data = res.json();
  return data;
}
export async function getQuiz(id) {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) throw new Error("Failed to Fetch quiz!");
  const { quizzes } = await res.json();
  const quiz = quizzes.find((item) => item.id === Number(id));
  return quiz;
}
