import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useQueryFetch } from "../../../hooks";

// import utils
import { addFilterToStorage } from "../../../utils";

const BrandNav = () => {
  const brandList = useQueryFetch("brandList");
  const [brandStatus, setStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (brandList.isSuccess && brandList.data) {
      setStatus(true);
    }
  }, [brandList.isSuccess]);

  //brandList
  return (
    <TopBrandListContainer>
      <BrandList>
        <li>Top brand</li>
        <li>:</li>
        {brandStatus ? (
          brandList.data.map((item, idx) => (
            <li
              key={idx}
              onClick={() =>
                addFilterToStorage({ brand: item.id }, () => {
                  history.push("/product");
                })
              }
            >
              {item.name}
            </li>
          ))
        ) : (
          <> </>
        )}
      </BrandList>
    </TopBrandListContainer>
  );
};

export default BrandNav;

const TopBrandListContainer = styled.div`
  font-size: 16px;
  background-color: #fff;
  padding: 30px 20px;
  font-weight: 500;
`;

const BrandList = styled.ul`
  display: block;
  list-style: none;
  margin-bottom: 0;
  text-align: center;

  & li {
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
    font-weight: 500;
    color: #777;
    display: inline-block;
  }

  & li:first-child,
  li:nth-child(2) {
    font-weight: bold;
    color: #5c2c90;
  }

  @media screen and (max-width: 991px) {
    & li:first-child {
      display: block;
      text-align: center;
      border: 0;
      border-bottom: 2px solid #5c2c90;
      width: fit-content;
      margin: 0 auto;
      margin-bottom: 10px;
      font-size: 16px;
    }

    & li:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    & li {
      border: 1px solid #eee;
      padding: 3px 8px;
      margin: 5px;
      font-size: 13px;
      font-weight: 600;
    }
  }
`;
