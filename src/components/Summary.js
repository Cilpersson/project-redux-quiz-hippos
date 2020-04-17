import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import { RestartButton } from "./RestartButton.js";
import animation from "../ice-cream.json";

export const Summary = () => {
  const totalQuestions = useSelector((state) => state.quiz.questions);

  const totalAnswers = useSelector((state) => state.quiz.answers);

  const correctAnswers = totalAnswers.filter(
    (answer) => answer.isCorrect === true
  );

  return (
    <EndgameWrapper>
      <Endgame>
        YAY! You got {correctAnswers.length} / {totalQuestions.length} points!
      </Endgame>
      <Lottie
        options={{
          animationData: animation,
        }}
      />
      <RestartButton />
    </EndgameWrapper>
  );
};

const Endgame = styled.h1`
  color: #a571a0;
  font-size: 36px;
  text-align: center;
`;

const EndgameWrapper = styled.section`
  width: 550px;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: auto;
  padding: 15px;
  background: #ffffff70;
  border-radius: 0.32em;
  border: 0.2em dashed #a571a0;
`;
