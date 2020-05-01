import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { CurrentQuestion } from "components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer,
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <CurrentQuestion />
      </Wrapper>
    </Provider>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #a671a1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23a671a1' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23c285a2' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23d59da8' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23e3b7b5' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23eed2c9' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23f8ece4' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
