import React from "react";
import styled from "styled-components";

import ActionButtons from "../../containers/Wishlist/ActionButtons";

// import dummy image
import image1 from "../../assets/wishlist/image1.jpg";

const WishlistItem = () => {
  return (
    <tr>
      <TableDataContainer>
        <img src={image1} alt="" />
      </TableDataContainer>

      <TableDataContainer>
        <TableText customStyle={{ cursor: "pointer" }}>Cotton Shirt</TableText>

        <MobileRow>
          <TableText>In Stock</TableText>
          <TableText>$250.15</TableText>
          <TableText>
            <ActionButtons
              customStyle={{
                "flex-direction": "column",
                "margin-top": "-10px",
              }}
            />
          </TableText>
        </MobileRow>
      </TableDataContainer>

      <TableDataContainer>
        <TableText customStyle={{ "font-size": "22px", color: "#000" }}>
          $250.15
        </TableText>
      </TableDataContainer>

      <TableDataContainer>
        <TableText>In Stock</TableText>
      </TableDataContainer>

      <TableDataContainer>
        <ActionButtons customStyle={{}} />
      </TableDataContainer>
    </tr>
  );
};

export default WishlistItem;

const TableDataContainer = styled.td`
  min-width: 210px;
  vertical-align: middle;
  color: #444;
  border-top: 0;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const MobileRow = styled.div`
  display: none;
  margin-top: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;

    & p {
      padding: 0 10px;
    }

    & p:nth-child(2) {
      color: #000;
    }
  }
`;

const TableText = styled.p`
  color: #777;
  font-weight: 400;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  text-transform: capitalize;
  margin-bottom: 0;

  ${(props) => props.customStyle}
`;
