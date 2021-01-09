//@ts-nocheck
import React from "react";
import styled from "styled-components";

// import common component
import { ItemText } from "../../common/ItemText";

// import component fetcher
import ComponentFetcher from "../../ComponentFetcher";

const LeftNav = () => {
  return (
    <LeftContainer>
      <ItemText>Free shipping on order over ৳1999</ItemText>
      <ComponentFetcher type="linkList" apiMapKey="appStoresLink">
        {(links) => (
          <>
            <ItemText customStyles={{ cursor: "auto" }}>Download app</ItemText>

            {links["google"] && (
              <a href={links["google"]["target"]} target="_open">
                <ItemText>
                  <i className="fa fa-android"></i>
                </ItemText>
              </a>
            )}
            {links["apple"] && (
              <a href={links["apple"]["target"]} target="_open">
                <ItemText>
                  <i className="fa fa-apple"></i>
                </ItemText>
              </a>
            )}
          </>
        )}
      </ComponentFetcher>
    </LeftContainer>
  );
};

export default LeftNav;

const LeftContainer = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;

  /* @media screen and (max-width: 768px) {
    span:first-child {
      display: none;
    }
  } */

  @media screen and (max-width: 578px) {
    margin: 0 auto;
  }
`;
