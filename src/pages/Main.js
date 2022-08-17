import React, { useState } from "react";
import styled from "styled-components";
import ContentList from "../ui/ContentList";
import { SearchInput } from "../ui/Input";

const Main = () => {
  const [searchData, setSearchData] = useState("");

  return (
    <MainContainer>
      <SearchInput>
        <div>
          <input onChange={(e) => setSearchData(e.target.value)}/>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </SearchInput>
      <ContentList searchData={searchData}></ContentList>
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
