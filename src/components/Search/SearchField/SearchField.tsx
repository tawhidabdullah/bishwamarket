import React from "react";
import styled from "styled-components";

const SearchField = ({ setQueryValue }) => {
  const handle = (e) => {
    setQueryValue(e.target.value);
  };

  return (
    <InputBox>
      <input
        type="text"
        aria-label="Amount (to the nearest dollar)"
        placeholder="Search Products......"
        onChange={(e) => handle(e)}
      />

      <button className="btn btn-normal">
        <i className="fa fa-search" />
        Search
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
    /* border-radius: 0 5px 5px 0; */
    padding: 13px 20px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;

    border: 1px solid #ced4da;
    outline: none;
    width: 400px;
    @media screen and (max-width: 580px) {
      max-width: 60%;
    }
  }

  & button {
    padding: 13px 20px;
    margin-left: -2px;
    width: fit-content;
    background-color: #ff6000;
    outline: none;
    color: #fff;
    font-weight: bold;
    border-radius: 0;

    & i {
      padding-right: 12px;
    }

    &:hover {
      background-color: orange;
      color: #fff;
      outline: none;
    }

    @media screen and (max-width: 580px) {
      padding: 13px 10px;
    }
  }
`;
