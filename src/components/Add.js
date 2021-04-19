import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Store from "../store";

const Add = observer(({ props }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValueChange = ({ target }) => {
    setInputValue(target.value);
  };
  const handleClick = () => {
    inputValue && Store.addTodo(inputValue);
    setInputValue("");
  };
  return (
    <AddInputSection>
      <AppInput
        label="Add Todo"
        className="addTodo"
        onChange={handleInputValueChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
        placeholder="'Buy milk'"
        value={inputValue}
      />
      <AddButton title="add" onClick={handleClick}>
        Add Todo
      </AddButton>
    </AddInputSection>
  );
});

export default Add;

const AddInputSection = styled.section`
  display: flex;
  justify-content: center;
`;

const AppInput = styled.input`
  padding: 0.25rem;
  padding-left: 1rem;
  background: #e7edf1;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-color: transparent;
  font-size: 1rem;
  flex: 1 0 auto;
  color: #617d98;
  &::placeholder {
    color: #c8d7e8;
    opacity: 1; /* Firefox */
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c8d7e8;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #c8d7e8;
  }
`;

const AddButton = styled.button`
  background: #aed6f3;
  border-color: transparent;
  flex: 0 0 5rem;
  display: grid;
  align-items: center;
  padding: 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  cursor: pointer;
  content: #52aff1;
  transition: all 0.3s linear;
  font-size: 0.6rem;
  &:hover {
    background: #52aff1;
    color: white;
  }
`;
