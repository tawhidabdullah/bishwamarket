import React from 'react'
import styled from "styled-components"
const SearchField = () => {
  return (
    <InputBox>
      <input
        type="text"
        aria-label="Amount (to the nearest dollar)"
        placeholder="Search Products......"
      />

      <button className="btn btn-normal">
        <i className="fa fa-search"></i>Search
      </button>
    </InputBox>
  );
};


export default SearchField;

//input box


const InputBox = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    border-radius: 0 5px 5px 0;
    padding: 13px 20px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;

    border: 1px solid #ced4da;
    outline: none;
    width: 400px;
  }

  & button {
    padding: 13px 20px;
    margin-left: -2px;
    width: fit-content;
    background-color: #00baf2;
    outline: none;
    color: #fff;
    & i {
      padding-right: 12px;
    }

    &:hover {
      background-color: black;
      color: #fff;
      outline: none;
    }
  }
`;