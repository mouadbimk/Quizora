# Quiz Platform

This project is a complete quiz application built with React. It allows users to browse quizzes, filter them, view detailed information, and take timed quizzes with scoring and progress tracking. All quiz data is served through a local JSON API using `json-server`.

## Table of Contents

- Overview
- Features
- Technologies Used
- Project Structure
- API and Data
- Installation
- Running the Project
- Available Scripts
- Future Improvements

## Overview

The Quiz Platform is an interactive web application designed to test user knowledge in various domains. Users can explore quizzes, filter them by category or difficulty, view detailed metadata for each quiz, and take quizzes with a countdown timer. Upon completion, the system calculates the final score and compares it with the user's highest score.

The application uses component-based architecture and React hooks such as `useState`, `useEffect`, and `useReducer` for state management.

## Screens

![Main Screen](/screenShot/main.png)
![Quizzes Screen](/screenShot/quizzes.png)
![Details Quize Screen](/screenShot/detailsQuiz.png)
![Question Screen](/screenShot/questionScreen.png)
![Score Screen](/screenShot/scoreScreen.png)

## Features

### User Interface

- Responsive interface built with React and CSS Modules
- Navigation managed using `react-router-dom`
- Home, Quizzes List, Quiz Detail, and Quiz Start pages

### Quiz Functionality

- Fetches quizzes from a local REST API
- Filtering by search term, category, and difficulty
- Quiz detail pages with description, duration, difficulty, and question count
- Timer displayed during the quiz
- Automatic scoring
- High score tracking
- Restart functionality

### State Management

- Local component state using `useState`
- Quiz flow managed using `useReducer`
- Loading, error, and finished states included

## Technologies Used

- React (Functional Components + Hooks)
- React Router
- CSS Modules
- JSON Server
- JavaScript ES2023
- Vite

## Project Structure

```bash
<Quizora>
│
├── data/               # json file of  content
├── public/
│   └── index.html      # Main HTML file
│   └── quizzes.json    # local data
├── src/
│   ├── components/     # React components (QuizList, QuizCard, ProgressBar, etc.)
│   ├── pages/          # UI/UX
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│   └── index.css      # Global styles
├── package.json         # Project config and dependencies
└── README.md
</Quizora>
```

## API and Data

The application uses `json-server` as a mock backend server.

### Start the API

```bash
npm run server
```

### Endpoints

- `GET /quizzes` – Returns all quizzes
- `GET /quizzes?id=1` – Returns a specific quiz

## Installation

Clone the project:

```bash
git clone https://github.com/mouadbimk/Quizora

npm install
npm run dev
```

## Available Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm install`    | Install dependencies           |
| `npm run dev`    | Start development server       |
| `npm run build`  | Build the app                  |
| `npm run server` | Start mock API                 |
| `npm run deploy` | Deploy project in Github pages |

## Future Improvements

- Add global state management using Context API
- Implement authentication
- Store high scores using a real backend
- Add animations and UI improvements
- Allow users to create custom quizzes
- Deploy both frontend and backend publicly
