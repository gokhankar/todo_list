import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import { configure } from "mobx";

import Store from "../store";

configure({
  enforceActions: "never",
});
const TodoList = observer(({ props }) => {
  const toggleComplete = (todo) => {
    Store.toggleCheckComplete(todo);
  };
  const todoAppList = Store.filteredTodo.map((todo, i) => (
    <ListItem key={todo.id} style={{ listStyleType: " none" }}>
      {todo.value}
      <input
        type="checkbox"
        onChange={toggleComplete.bind(this, todo)}
        value={todo.complete}
        checked={todo.complete}
      />
    </ListItem>
  ));

  const todoInitialList = Store.todoList.map((todo, i) => (
    <ListItem key={todo.id} style={{ listStyleType: " none" }}>
      {todo.value}
      <input
        type="checkbox"
        onChange={toggleComplete.bind(this, todo)}
        value={todo.complete}
        checked={todo.complete}
      />
    </ListItem>
  ));

  return (
    <div style={{ marginTop: "2rem" }}>
      <div>
        <ul> {Store.filter ? todoAppList : todoInitialList} </ul>
      </div>
    </div>
  );
});

export default TodoList;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  transition: all 0.3s linear;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  &:hover {
    color: #617d98;
    background: #e6edf3;
  }
`;
