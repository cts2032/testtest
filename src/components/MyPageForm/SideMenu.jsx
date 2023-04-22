import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const SideMenus = styled.div`
  border: none;
  position: absolute;
  top: 135px;
  left: 10;
  border-radius: 5px;
  box-shadow: 2px 1px 1.7px 1px gray;
  height: 68%;
  width: 200px;
  padding: 1rem 1rem 1rem 0;
`;
export const InfoButton = styled.li`
  color: gray;
  border: none;
  background-color: #c7e8ca;
  margin-bottom: 10px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 10px;
  width: 200px;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: linear;

  cursor: pointer;
  &:hover {
    background-color: #5d9c59;
    color: white;
    width: 200px;
  }
`;
const SideMenu = () => {
  return (
    <SideMenus>
      <ul>
        <Link to={"/mypage/details"} style={{ textDecorationLine: "none" }}>
          <InfoButton>Personal Details</InfoButton>
        </Link>
        <Link to={"/mypage/changepw"} style={{ textDecorationLine: "none" }}>
          <InfoButton>Change Password</InfoButton>
        </Link>
        <Link to={"/mypage/view"} style={{ textDecorationLine: "none" }}>
          <InfoButton>View Orders</InfoButton>
        </Link>
        <InfoButton>Log Out</InfoButton>
      </ul>
    </SideMenus>
  );
};

export default SideMenu;
