import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// redux ops
import { sessionOperations } from "../../../state/ducks/session";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

const AccountDropdown = ({ isAuthenticated, logout }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    logout();
  };

  return (
    <>
      <AccountDropdownContainer>
        {isAuthenticated ? (
          <>
            <AccountDropdownItem onClick={() => history.push("/dashboard")}>
              Dashboard
            </AccountDropdownItem>
            <AccountDropdownItem onClick={() => history.push("/order-history")}>
              Order History
            </AccountDropdownItem>
            <AccountDropdownItem onClick={handleLogout}>
              Logout
            </AccountDropdownItem>
          </>
        ) : (
          <>
            <AccountDropdownItem onClick={() => history.push("/signin")}>
              Login
            </AccountDropdownItem>
            <AccountDropdownItem onClick={() => history.push("/signup")}>
              Register
            </AccountDropdownItem>
            <AccountDropdownItem
              onClick={() => history.push("/forgot-password")}
            >
              Forgot Password
            </AccountDropdownItem>
          </>
        )}
      </AccountDropdownContainer>
    </>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.session.isAuthenticated,
// })

const mapDispatchToProps = {
  logout: sessionOperations.logout,
};

export default connect(null, mapDispatchToProps)(AccountDropdown);
// export default AccountDropdown;

const AccountDropdownContainer = styled.ul`
  ${DropdownContainerStyles}
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 20px 10px;
`;

const AccountDropdownItem = styled.li`
  ${DropdownItemStyles}
`;
