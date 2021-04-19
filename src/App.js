import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import TodoList from "../src/components/TodoList";
import Filter from "../src/components/Filter";
import Add from "../src/components/Add";
import ClearCompleted from "./components/ClearCompleted";
import Store from "../src/store";
import Navi from "./components/Navi";

const App = observer(() => {
  const completedTodos = Store.todoList.filter((todo) => todo.complete);
  const todoLength = Store.todoList.length;
  return (
    <Main>
      <Navi />
      <AppHeader>
        <h1> a simple todo app </h1>
        <p>made with React and Mobx</p>
      </AppHeader>
      <AddingSection>
        <Add />
      </AddingSection>
      {todoLength > 0 && (
        <ListSection>
          <ListSectionHeader>
            <h1 style={{ display: "inline" }}>my todos</h1>
            <Filter style={{ display: "inline" }} />
          </ListSectionHeader>
          <TodoList />
          {completedTodos.length !== 0 && <ClearCompleted />}
        </ListSection>
      )}
    </Main>
  );
});

export default App;

const Main = styled.section`
  place-items: center;
`;

const AppHeader = styled.section`
  margin-top: 30px;
  text-align: center;
  min-width: 320px;
`;

const ListSectionHeader = styled.section`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const AddingSection = styled.section`
  background: white;
  padding: 2rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 35rem;
  min-width: 320px;
  text-align: center;
  margin-top: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  padding: 2rem;
  &:hover {
    box-shadow: 0 5px 15px #00000033;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

const ListSection = styled.section`
  background: white;
  padding: 2rem 0;
  width: 90vw;
  margin: 0 auto;
  padding: 2rem;
  max-width: 35rem;
  min-width: 320px;
  text-align: center;
  margin-top: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  &:hover {
    box-shadow: 0 5px 15px #00000033;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;
