import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import img1 from "../../assets/collection/1 .jpg";

// import utils
import { addFilterToStorage } from "../../utils";

const CollectionByCategory = ({ item }) => {
  const history = useHistory();

  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <Conetens>
      <Imagediv>
        <img src={item.fullCover || item.cover || item.icon || img1} />
      </Imagediv>
      <Details>
        <p
          onClick={() => setIsDropdown((value) => !value)}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          {item.name}{" "}
          <span
            style={{
              display: "inline-block",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            <i className={`fa fa-angle-${isDropdown ? "up" : "down"}`} />
          </span>
        </p>

        {item &&
          item.subCategory &&
          isDropdown &&
          item.subCategory.map((sub) => (
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                addFilterToStorage({ category: sub.id }, () =>
                  history.push("/product")
                )
              }
            >
              {sub.name}
            </p>
          ))}
        <Button
          onClick={() =>
            addFilterToStorage({ category: item.id }, () => {
              history.push("/product");
            })
          }
        >
          shop now
        </Button>
      </Details>
    </Conetens>
  );
};

export default CollectionByCategory;

const Conetens = styled.div`
  display: flex;
  flex-direction: column;
`;
const Imagediv = styled.div`
  height: 240px;

  & img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;

  & p {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: #00baf2;
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  cursor: pointer;
  outline: none !important;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: black;
    color: ghostwhite;
  }
`;
