import React from "react";
import { useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

export const RestartButton = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(quiz.actions.restart())}>
      Start again
    </Button>
  );
};

const Button = styled.button`
  display: inline-block;
  height: 70px;
  width: 200px;
  padding: 0.35em 1.2em;
  border: 0.1em solid #d1aa9d;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #91766d;
  background-color: #eed2c970;
  text-align: center;
  transition: all 0.2s;
`;
