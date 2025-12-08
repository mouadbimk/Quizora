import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  // 'loading','error','ready' ,'active','finished'
  status: "idle",
  quiz: {},
  index: 0,
  points: 0,
  answer: null,
  highscore: 0,
  secondRemaining: null,
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz(state, action) {
      state.quiz = action.payload.quiz;
      state.secondRemaining = action.payload.timer;
      state.status = "ready";
      state.questions = action.payload.quiz.questions;
    },
    updateTimer(state) {
      state.secondRemaining = state.secondRemaining - 1;
      state.status = state.secondRemaining > 0 ? state.status : "finished";
    },
    addAnswer(state, action) {
      const question = state.questions.at(state.index);
      state.answer = action.payload;
      state.points =
        action.payload === question.correctAnswer
          ? state.points + question.points
          : state.points;
    },
    goToNext(state) {
      const isLast = state.index + 1 === state.questions.length;
      if (!isLast) {
        state.index = state.index + 1;
        state.answer = null;
      } else {
        state.status = "finished";
        state.answer = null;
        state.highscore =
          state.points > state.highscore ? state.points : state.highscore;
      }
    },
    restart(state) {
      state.status = "idle";
      state.answer = null;
      state.quiz;
      state.highscore;
      state.secondRemaining = null;
      state.index = 0;
      state.points = 0;
    },
    resetQuiz() {
      return initialState;
    },
    startQuiz(state) {
      state.status = "active";
    },
  },
});
export const {
  addQuiz,
  updateTimer,
  addAnswer,
  goToNext,
  restart,
  resetQuiz,
  startQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
