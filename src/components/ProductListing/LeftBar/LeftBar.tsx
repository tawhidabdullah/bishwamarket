import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { nodeModuleNameResolver } from "typescript";

import image1 from "../../../assets/dropdown.png";
const LeftBar = () => {
  // const ListRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handle = (val) => {
    var myCollection = Array.from(
      document.getElementsByClassName("content") as HTMLCollectionOf<
        HTMLElement
      >
    );

    if (myCollection[val].style.display === "none") {
      myCollection[val].style.display = "block";
    } else {
      myCollection[val].style.display = "none";
    }
  };

  return (
    <LeftContent>
      <Tag onClick={(e) => handle(0)}>
        <h6>
          <strong>brand</strong>
        </h6>
      </Tag>
      <div className="content">
        <ContentList>
          <label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            bike
          </label>
        </ContentList>

        <ContentList>
          <label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            car
          </label>
        </ContentList>

        <ContentList>
          <label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            car33
          </label>
        </ContentList>
      </div>

      <Tag onClick={(e) => handle(1)}>
        <h6>
          <strong>color</strong>
        </h6>
      </Tag>

      <div className="content">
        <Colors>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
          <Color></Color>
        </Colors>
      </div>

      <Tag onClick={(e) => handle(2)}>
        <h6>
          <strong>Price</strong>
        </h6>
      </Tag>
      <div className="content">
        <ContentList>
          <label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            $10-$100
          </label>
        </ContentList>

        <ContentList>
          <label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            $100-$200
          </label>
        </ContentList>

        <ContentList>
          <label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            $200-$300
          </label>
        </ContentList>
      </div>
    </LeftContent>
  );
};

export default LeftBar;

const LeftContent = styled.div`
  background-color: #fff;

  padding: 10px 20px;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: minmax(200px, 1fr);
  height: fit-content;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const TagList = styled.div``;

const Tag = styled.div`
  background-image: url(${image1});
  background-position-x: 90%;
  background-position-y: 0%;
  background-size: 15px 15px;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  cursor: pointer;
`;

const ContentList = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  color: #777;
  font-weight: 600;

  & input {
    margin-right: 10px;
  }
`;

const Color = styled.div`
  height: 36px;
  width: 36px;
  margin-left: 0.5em;
  border-radius: 18px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid #aaa;
  cursor: pointer;
  background-color: #1e2024;
  cursor: pointer;
`;
const Colors = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
