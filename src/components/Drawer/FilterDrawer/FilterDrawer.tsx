//@ts-nocheck
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";

import { FilterCheckbox } from "../../common/FilterCheckbox";

const inputStyles = {
  label: {
    "font-size": "13px",
    margin: 0,
    padding: "0 20px",
  },
};

const FilterDrawer = ({
  open,
  toggleFilterDrawer,
  filterLabels,
  handleFilterProduct,
  ids,
}) => {
  // const history = useHistory();

  const [activeTabs, setActiveTabs] = useState([]);

  const setTabs = (id) => {
    if (activeTabs.includes(id)) {
      let newTabs = activeTabs.filter((tabId) => tabId !== id);
      setActiveTabs(newTabs);
    } else {
      setActiveTabs((tabs) => [...tabs, id]);
    }
  };

  // const gotoPath = (path) => (path ? history.push(path) : null);

  return (
    <Fragment>
      {/* <BackDrop show={open} clicked={handleClose} /> */}
      <FilterDrawerContainer show={open}>
        <DrawerHeader>
          <HeaderText onClick={() => toggleFilterDrawer()}>
            Back <i className="fa fa-angle-right"></i>
          </HeaderText>
        </DrawerHeader>

        <DrawerMenuContainer>
          {Object.keys(filterLabels).map((filterType, idx) => (
            <>
              <DrawerMenuItem key={idx} onClick={() => setTabs(idx)}>
                <ItemText>{filterType}</ItemText>
                <ItemText>
                  {activeTabs.includes(idx) ? (
                    <i className="fa fa-minus" />
                  ) : (
                    <i className="fa fa-plus" />
                  )}
                </ItemText>
              </DrawerMenuItem>
              {activeTabs.includes(idx) && (
                <>
                  {filterLabels[filterType].map((opt) => (
                    <FilterCheckbox
                      key={opt.id}
                      label={opt.name}
                      value={{ id: opt.id, header: filterType }}
                      ids={ids}
                      handleChange={handleFilterProduct}
                      customStyle={inputStyles}
                    />
                  ))}
                </>
              )}
            </>
          ))}
        </DrawerMenuContainer>
      </FilterDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationDrawer: () => dispatch(toggleNavigationDrawer()),
});

export default connect(null, mapDispatchToProps)(FilterDrawer);

const FilterDrawerContainer = styled.div`
  position: fixed;
  width: 20rem;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: PT Sans, sans-serif;

  @media screen and (min-width: 1200px) {
    display: none;
  }
  /* @media (max-width: 500px) {
    width: 80%;
    max-width: 80%;
  } */
`;

const DropdownItemContainer = styled.ul`
  padding-left: 25px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;

  ${(props) => props.customStyle}
`;

// const DropdownItem = styled.li`
//   padding: 9px 10px;
//   list-style: none;
//   color: #444;
//   font-weight: bold;
//   letter-spacing: 1px;
// `;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-family: PT-Sans, sans-serif;
  padding: 15px;
`;

const HeaderText = styled.span`
  font-size: 18px;
  /* padding: 20px; */
  font-weight: 600;
  letter-spacing: 0.8px;
  cursor: pointer;
  margin-right: 15px;
  color: #444;
`;

const ItemText = styled.span`
  font-size: 14px;
  padding: 5px 0;
`;

const DrawerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
`;
const DrawerMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: PT Sans, sans-serif;
  padding: 10px 15px;
  font-weight: bold;
  color: #777;

  & span:last-child {
    margin-right: 20px;
    font-size: 11px;
    font-weight: normal;
  }
`;
