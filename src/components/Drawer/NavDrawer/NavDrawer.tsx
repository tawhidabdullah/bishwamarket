//@ts-nocheck
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// import backdrop element
// import { BackDrop } from "../../elements/Backdrop";

// import toggle drawer action
import { toggleNavigationDrawer } from "../../../state/ducks/globalState/actions";

// dummy data
import { MenuItems } from "./NavItems";

const NavDrawer = ({ open, toggleNavigationDrawer }) => {
  const history = useHistory();

  const [activeTabs, setActiveTabs] = useState([]);
  // for showing color on active tab
  // const [activeTabColor, setActiveColor] = useState("#444");

  // const [isIncluded, setIsIncluded] = useState(false);

  const setTabs = (id) => {
    if (activeTabs.includes(id)) {
      let newTabs = activeTabs.filter((tabId) => tabId !== id);
      setActiveTabs(newTabs);
      // setIsIncluded(false);
    } else {
      setActiveTabs((tabs) => [...tabs, id]);
      // setIsIncluded(true);
    }
  };

  const gotoPath = (path) => (path ? history.push(path) : null);

  return (
    <Fragment>
      {/* <BackDrop show={open} clicked={handleClose} /> */}
      <NavDrawerContainer show={open}>
        <DrawerHeader>
          <HeaderText onClick={() => toggleNavigationDrawer()}>
            Back <i className="fa fa-angle-right"></i>
          </HeaderText>
        </DrawerHeader>

        <DrawerMenuContainer>
          {MenuItems.map((item) => (
            <>
              <DrawerMenuItem key={item.id} onClick={() => setTabs(item.id)}>
                <ItemText active={activeTabs.includes(item.id)}>
                  {item.name}
                </ItemText>
                <ItemText active={activeTabs.includes(item.id)}>
                  {activeTabs.includes(item.id) ? (
                    <i className="fa fa-minus" />
                  ) : (
                    <i className="fa fa-plus" />
                  )}
                </ItemText>
              </DrawerMenuItem>
              {activeTabs.includes(item.id) && (
                <DropdownItemContainer>
                  {item.items.map((i) => (
                    <Fragment key={i.id}>
                      <DropdownItem>
                        {i.subItems ? <strong>{i.name}</strong> : i.name}
                      </DropdownItem>
                      {i.subItems && (
                        <DropdownItemContainer>
                          {i.subItems.map((sub) => (
                            <DropdownItem
                              onClick={() => {
                                gotoPath(sub.path);
                                toggleNavigationDrawer();
                              }}
                              key={sub.id}
                            >
                              {sub.name}
                            </DropdownItem>
                          ))}
                        </DropdownItemContainer>
                      )}
                    </Fragment>
                  ))}
                </DropdownItemContainer>
              )}
            </>
          ))}
        </DrawerMenuContainer>
      </NavDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationDrawer: () => dispatch(toggleNavigationDrawer()),
});

export default connect(null, mapDispatchToProps)(NavDrawer);

const NavDrawerContainer = styled.div`
  position: fixed;
  width: 20rem;
  max-width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
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
`;

const DropdownItem = styled.li`
  padding: 9px 10px;
  list-style: none;

  font-weight: ${(props) => (props.header?.length > 0 ? "bold" : "")};

  /* font-weight: ${(props) =>
    props.header && props.header.length > 0 ? "bold" : "normal"}; */
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-family: PT-Sans, sans-serif;
`;

const HeaderText = styled.span`
  font-size: 18px;
  padding: 20px;
  font-weight: 600;
  letter-spacing: 0.8px;
  cursor: pointer;
  margin-right: 15px;
  color: #444;
`;

const ItemText = styled.span`
  /* color: #ff6000; */
  font-size: 14px;
  padding: 5px 0;
  color: ${(props) => (props.active ? `#ff6000` : `#444`)};
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
