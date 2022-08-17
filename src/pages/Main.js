import React from "react";
import styled from "styled-components";
import ContentList from "../ui/ContentList";
import { SearchInput } from "../ui/Input";

const Main = () => {
  return (
    <MainContainer>
      <SearchInput>
        <div>
          <input />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </SearchInput>
      <ContentList></ContentList>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 65rem;
  height: 100%;
  /* background-color: #f2f2f2; */
  padding: 3rem;
`;
