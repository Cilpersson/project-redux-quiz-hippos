import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { quiz } from "reducers/quiz";
import { Summary } from "components/Summary";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";

export const CurrentQuestion = () => {
  const [answerIndex, setAnswerIndex] = useState();
  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  console.log(typeof answer);

  const handleOnClick = (index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    );
    setAnswerIndex(index); // sätta index på den man klickat på
  };

  const setClassName = (index) => {
    // för att bara sätta en class på det option som man klickat på
    // och om det är rätt eller fel så sätts right eller wrong klassen
    if (answerIndex === index) {
      return question.correctAnswerIndex === index
        ? "correctAnswer"
        : "wrongAnswer";
    }
  };

  if (quizOver) {
    return <Summary />;
  }

  return (
    <QuestionContainer>
      <Question>
        {question.id}. {question.questionText}
      </Question>
      {question.options.map((option, index) => (
        <Option key={index}>
          <OptionInput
            className={answerIndex === undefined ? "" : setClassName(index)}
            type="button"
            id={index}
            name="option"
            value={option}
            onClick={() => handleOnClick(index)}
            disabled={answer ? true : false}
          />
        </Option>
      ))}
      <Button
        answer={answer}
        onClick={() => {
          dispatch(quiz.actions.goToNextQuestion());
          setAnswerIndex();
        }}
        buttonTitle="Next"
      />
      <ProgressBar question={question} />
    </QuestionContainer>
  );
};

const Question = styled.h1`
  color: #a571a0;
  font-size: 36px;
  text-align: center;
`;
const Option = styled.label``;

const OptionInput = styled.input`
  display: inline-block;
  height: 70px;
  width: 250px;
  padding: 0.35em 1.2em;
  border: 0.1em dashed #d1aa9d;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #91766d;
  text-align: center;
  transition: all 0.2s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const QuestionContainer = styled.section`
  width: 550px;
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
