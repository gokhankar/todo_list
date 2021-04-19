import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Store from "../store";

const ClearCompleted = observer(({ props }) => {
  return (
    <div
      style={{
        float: "right",
      }}
    >
      <ClearButton onClick={Store.clearAllCompleted}>
        Remove Completed Todos
      </ClearButton>
    </div>
  );
});

export default ClearCompleted;

const ClearButton = styled.button`
  border: none;
  background-color: white;
  color: #e7edf1;
  &:hover {
    color: #617d98;
  }
`;
