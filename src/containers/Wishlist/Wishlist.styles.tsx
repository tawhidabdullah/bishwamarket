import styled from "styled-components";
import { Table } from "react-bootstrap";

export const ButtonContainer = styled.div`
  padding-top: 35px;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin-left: auto;

  @media screen and (max-width: 991px) {
    width: 50%;

    & div button {
      padding: 8px 0;
    }
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    flex-direction: column;
    margin: unset;
    margin: 0 auto;

    & div {
      margin: unset;
    }
  }
`;

export const TableDataContainer = styled.td`
  min-width: 210px;
  vertical-align: middle;
  color: #444;
  text-align: center;
  font-family: PT Sans, sans-serif;

  & img {
    height: 90px;
  }

  @media screen and (max-width: 768px) {
    :nth-child(n + 3) {
      display: none;
    }
  }
`;

export const CustomTable = styled(Table)`
  & thead th {
    border: 0;
    border-bottom: 1px solid #dee2e6;
  }

  & td {
    vertical-align: unset;
  }

  @media screen and (max-width: 768px) {
    & td {
      vertical-align: top;
    }

    & thead th:nth-child(n + 3) {
      display: none;
    }
  }
`;

export const WishlistContainer = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
`;

export const InnerContainer = styled.div`
  @media screen and (max-width: 1470px) {
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const TableHeaderItem = styled.td`
  font-weight: 900;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  padding: 0 0.75rem 0.75rem 0.75rem;
  letter-spacing: 0.05em;
  line-height: 1;
`;
