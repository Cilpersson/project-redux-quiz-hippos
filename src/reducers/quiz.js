import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: "What is linguine? 🍽",
    options: ["Pasta", "Sausage", "Scallop", "Sauce"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText: "Champagne is to sparkling wine what tequila is to...🌵",
    options: ["Mezcal", "Sotol", "Raicilla", "Pulque"],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    questionText: "What is carbonade cooked in? 🥣",
    options: ["Water", "Lard", "Wine", "Beer"],
    correctAnswerIndex: 3,
  },
  {
    id: 4,
    questionText: "Which of the following is not a wine grape? 🍇",
    options: ["Merlot", "Pinotage", "Chablis", "Zweigelt"],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    questionText: "What is a Stockholmare? 🇸🇪",
    options: ["A cookie", "A citizen", "A sausage", "All of the above"],
    correctAnswerIndex: 2,
  },
  {
    id: 6,
    questionText: "Which one is not a berry? 🍒",
    options: ["Strawberry", "Blueberry", "Tomato", "Avocado"],
    correctAnswerIndex: 0,
  },
  {
    id: 7,
    questionText: "What is the national dish of Malmö? 🍻",
    options: ["Kebab", "Pölse", "Spettekaka", "Falafel"],
    correctAnswerIndex: 3,
  },
  {
    id: 8,
    questionText: "Which ingredient is not in a classic Princess cake? 🍰",
    options: ["Cream", "Jam", "Custard", "Marcipan"],
    correctAnswerIndex: 1,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState;
    },
  },
});
