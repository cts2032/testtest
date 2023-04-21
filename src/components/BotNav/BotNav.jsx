import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../Image/fook_logo.png";
import { Button } from "../NavBar/NavBarSty";

export const Brand = styled.img`
  height: 10vh;
  cursor: pointer;
  z-index: 3;
  position: absolute;
  top: 70%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
export const BnContainer = styled.div`
  position: absolute;

  bottom: 0;
  left: 37%;
  right: 37%;
  margin: auto;
  display: flex;
  align-items: center;
`;
export const LButtonBox = styled.div`
  height: 10vh;
  width: 50%;
  border: none;

  border-top-right-radius: 50px;
  box-shadow: 1px 10px 10px 5px gray;
  z-index: 1;
`;
export const RButtonBox = styled.div`
  height: 10vh;
  width: 50%;
  border: none;
  border-top-left-radius: 50px;
  box-shadow: -1px 10px 10px 5px gray;
  z-index: 1;
`;
const BotNav = () => {
  return (
    <>
      <Link to="/">
        <Brand src={logo} alt=""></Brand>
      </Link>
      <BnContainer>
        <LButtonBox>
          <Button style={{ float: "right" }}>
            <span class="material-symbols-outlined">person_add</span>
          </Button>
        </LButtonBox>

        <RButtonBox>
          <Link to="/login">
            <Button>
              <span class="material-symbols-outlined">login</span>
            </Button>
          </Link>
        </RButtonBox>
      </BnContainer>
    </>
  );
};

export default BotNav;
