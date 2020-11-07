import React from "react";

// import style
import { TableHeaderItem } from "./Wishlist.styles";

const TableHeader = ({ headerLists }) => {
  return (
    <tr>
      {headerLists.map((header, idx) => (
        <TableHeaderItem key={idx}>{header}</TableHeaderItem>
      ))}
    </tr>
  );
};

export default TableHeader;
