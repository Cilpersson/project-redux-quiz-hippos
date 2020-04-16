import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = ({ question }) => {
  const totalQuestions = useSelector((state) => state.quiz.questions);
  const currentQuestion = question.id;

  return (
    <h2>
      {currentQuestion}/ {totalQuestions.length}
    </h2>
  );
};
