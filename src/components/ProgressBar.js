import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const ProgressBar = ({ question }) => {
  const totalQuestions = useSelector((state) => state.quiz.questions);
  const currentQuestion = question.id;

  return (
    <Progress>
      {currentQuestion} / {totalQuestions.length}
    </Progress>
  );
};

const Progress = styled.h2`
  color: #a571a0;
`;
