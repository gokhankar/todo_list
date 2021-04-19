import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

import { observer } from "mobx-react";
import { configure } from "mobx";

import Store from "../store";

configure({
  enforceActions: "never",
});
const TodoList = observer(({ props }) => {
  const delTodo = (todo) => {
    Store.removeTodo(todo);
  };

  const toggleComplete = (todo) => {
    Store.toggleCheckComplete(todo);
  };
  const todoAppList = Store.filteredTodo.map((todo, i) => (
    <ListItem key={todo.id} style={{ listStyleType: " none" }}>
      <p>{todo.value}</p>
      <div>
        <MdDelete color="red" size="14" />
        <input
          type="checkbox"
          onChange={toggleComplete.bind(this, todo)}
          value={todo.complete}
          checked={todo.complete}
        />
      </div>
    </ListItem>
  ));

  const todoInitialList = Store.todoList.map((todo, i) => (
    <ListItem key={todo.id} style={{ listStyleType: " none" }}>
      <p style={{ display: "inline", textAlign: "left" }}>{todo.value}</p>
      <div style={{ display: "inline", width: "50px", marginRight: "5px" }}>
        <MdDelete
          color="tomato"
          size="16"
          style={{ marginTop: "2px" }}
          onClick={delTodo.bind(this, todo)}
        />
        <input
          type="checkbox"
          onChange={toggleComplete.bind(this, todo)}
          value={todo.complete}
          checked={todo.complete}
          style={{ marginLeft: "10px" }}
        />
      </div>
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
