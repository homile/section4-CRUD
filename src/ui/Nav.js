import React from "react";
import styled from "styled-components";

import { PrimaryButton } from "./Button";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const createHandler = () => {
    navigate("/create");
  };

  const prevHandler = () => {
    navigate("/");
  };

  return (
    <NavContainer>
      <PrimaryButton
        backgroundcolor="white"
        color="black"
        width="150px"
        height="50px"
        fontsize="30px"
        onClick={prevHandler}
      >
        메인으로
      </PrimaryButton>
      <div>
        <h2>나만의 CRUD 만들기</h2>
      </div>
      <PrimaryButton
        backgroundcolor="white"
        color="black"
        width="150px"
        height="50px"
        fontsize="30px"
        onClick={createHandler}
      >
        글쓰기
      </PrimaryButton>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  /* position: fixed;
  top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: #74c0fc;
  color: white;

  div{
    margin-left: 1rem;
  }
`;
