// @ts-nocheck
import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAlert } from "react-alert";

// menu data
import { MenuItems } from "./NavItems";

// redux ops
import { globalOperations } from "../../../state/ducks/globalState";
import { sessionOperations } from "../../../state/ducks/session";

const NavDrawer = ({
  open,
  toggleNavigationDrawer,
  isAuthenticated,
  logout,
}) => {
  const history = useHistory();
  const alert = useAlert();

  const [activeTabs, setActiveTabs] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    try {
      let data = jwt_decode(token);
      setUsername(data.firstName || "");
    } catch (error) {
      return;
    }
  }, [isAuthenticated]);

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

  const gotoPath = (path, item) => {
    if (item.items && item.items.length > 0) return;
    if (path === "##") {
      localStorage.removeItem("authToken");
      logout();
      history.push("/");
      toggleNavigationDrawer();
      return;
    }
    history.push(path);
    toggleNavigationDrawer();
  };

  const renderNavItem = (item) => {
    return (
      <>
        <DrawerMenuItem key={item.id} onClick={() => setTabs(item.id)}>
          <ItemText
            onClick={() => gotoPath(item.path, item)}
            // @ts-ignore
            active={activeTabs.includes(item.id)}
          >
            {item.name === "LOGGED IN AS"
              ? `${item.name} ${username}`
              : item.name}
          </ItemText>

          {item.items && item.items.length > 0 && (
            <ItemText
              // @ts-ignore
              active={activeTabs.includes(item.id)}
            >
              {
                // @ts-ignore
                activeTabs.includes(item.id) ? (
                  <i className="fa fa-minus" />
                ) : (
                  <i className="fa fa-plus" />
                )
              }
            </ItemText>
          )}
        </DrawerMenuItem>
        {
          // @ts-ignore
          activeTabs.includes(item.id) && item.items && item.items.length > 0 && (
            <DropdownItemContainer>
              {item.items.map((i) => (
                <Fragment key={i.id}>
                  <DropdownItem onClick={() => gotoPath(i.path, i)}>
                    {i.items ? (
                      <strong>
                        {i.name === "LOGGED IN AS"
                          ? `${i.name} ${username}`
                          : i.name}
                      </strong>
                    ) : (
                      i.name
                    )}
                  </DropdownItem>
                </Fragment>
              ))}
            </DropdownItemContainer>
          )
        }
      </>
    );
  };

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
          {MenuItems.map((item, idx) => (
            <Fragment key={idx}>
              {isAuthenticated && item.isAuth === true && renderNavItem(item)}
              {item.isAuth == "MAYBE" && renderNavItem(item)}
              {!isAuthenticated && item.isAuth === false && renderNavItem(item)}
            </Fragment>
          ))}
        </DrawerMenuContainer>
      </NavDrawerContainer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = {
  toggleNavigationDrawer: globalOperations.toggleNavigationDrawer,
  logout: sessionOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);

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
  font-weight: bold;
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
  font-weight: bold;
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
`;
