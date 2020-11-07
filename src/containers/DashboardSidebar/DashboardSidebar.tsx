import React from "react";
import styled from "styled-components";

const DashboardSideBar = ({ sidebarList }) => {
  return (
    <DashboardSideBarContainer>
      <InnerContainer>
        <SidebarList>
          {Array.isArray(sidebarList) &&
            sidebarList &&
            sidebarList[0] &&
            sidebarList.map((item, idx) => (
              <SidebarListItem key={idx}>
                <span>
                  <i className="fa fa-angle-right" /> {item}
                </span>
              </SidebarListItem>
            ))}
        </SidebarList>
      </InnerContainer>
    </DashboardSideBarContainer>
  );
};

export default DashboardSideBar;

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
