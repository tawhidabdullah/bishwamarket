import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// redux ops
import { sessionOperations } from "../../state/ducks/session";

const DashboardSideBar = ({ logout }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    logout();
    history.push("/");
  };

  return (
    <DashboardSideBarContainer>
      <InnerContainer>
        <SidebarList>
          <SidebarListItem>Account Info</SidebarListItem>
          <SidebarListItem>Address Book</SidebarListItem>
          <SidebarListItem>My Orders</SidebarListItem>
          <SidebarListItem>My Wishlist</SidebarListItem>
          <SidebarListItem>My Account</SidebarListItem>
          <SidebarListItem>Change Password</SidebarListItem>
          <SidebarListItem onClick={handleLogout}>Logout</SidebarListItem>
        </SidebarList>
      </InnerContainer>
    </DashboardSideBarContainer>
  );
};

const mapDispatchToProps = {
  logout: sessionOperations.logout,
};

export default connect(null, mapDispatchToProps)(DashboardSideBar);

const DashboardSideBarContainer = styled.div`
  background-color: #fff;
`;

const InnerContainer = styled.div`
  padding: 15px;
`;

const SidebarList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const SidebarListItem = styled.li`
  display: flex;
  transition: all 0.5s ease;
  cursor: pointer;
  color: #333;
  font-size: 17.9225px;
  padding: 10px 5px;

  :hover {
    color: #00baf2;
    padding-left: 20px;
  }
`;
