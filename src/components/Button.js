import React from "react";
import styled from "styled-components";

export const Button = ({ onClick, buttonTitle, answer }) => {
  return (
    <QuizButton onClick={onClick} disabled={!answer ? true : false}>
      {buttonTitle}
    </QuizButton>
  );
};

const QuizButton = styled.button`
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
`;
