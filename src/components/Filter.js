import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";

import Store from "../store";

const Filter = observer(({ props }) => {
  const filtering = (e) => {
    console.log(e.target.value);
    Store.handleFilter(e);
  };
  return (
    <AddInputSection>
      <AppSearch
        className="filter"
        onChange={filtering}
        placeholder="type to search"
      />
    </AddInputSection>
  );
});

export default Filter;

const AddInputSection = styled.section`
  display: flex;
  justify-content: center;
`;

const AppSearch = styled.input`
  max-width: 8rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background: #f2f5f7;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-color: transparent;
  font-size: 1rem;
  flex: 1 0 auto;
  color: #617d98;
  &::placeholder {
    color: #c8d7e8;
    text-align: right;
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
