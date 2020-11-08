import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useQueryFetch, useHandleFetch } from "../../../hooks";

// import utils
import { addFilterToStorage } from "../../../utils";

const BrandNav = () => {
  const brandList = useQueryFetch("brandList");
  const [brandStatus, setStatus] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (brandList.isSuccess && brandList.data) {
      setStatus(false);
    }
  }, [brandList.isSuccess]);

  //brandList
  return (
    <BB>
      <TITLE>
        <span>TOP BRAND</span>
        <span>:</span>
      </TITLE>
      <Item>
        {brandStatus ? (
          <> </>
        ) : (
          brandList.data.map((item, idx) => {
            return (
              <span
                key={idx}
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  addFilterToStorage({ brand: item.id }, () => {
                    history.push("/product");
                  })
                }
              >
                {" "}
                {item.name}{" "}
              </span>
            );
          })
        )}
      </Item>
    </BB>
  );
};

export default BrandNav;

const BB = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  background-color: #fff;
  padding: 30px 20px;

  & span {
    padding: 5px;
    margin: 2px;
    @media screen and (max-width: 750px) {
      border: 1px solid #ddd;
    }
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const TITLE = styled.div`
  display: flex !important;
  justify-content: flex-end;
  align-items: start;
  flex-wrap: wrap;

  & span {
    color: #ff6000;
    font-weight: 700;

    @media screen and (max-width: 1000px) {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(1) {
        border: none;
        border-bottom: 2px solid #ff6000;
      }
    }
    @media only screen and (max-width: 1000px) {
      border-bottom: 2px solid #ff6000;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
const Item = styled.div`
  display: flex !important;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  & span {
    color: #777;

    font-weight: 400;
  }

  & span:hover {
    color: #ff6000;
  }

  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
