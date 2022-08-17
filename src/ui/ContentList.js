import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../util/useFetch";
import { useNavigate } from "react-router-dom";

const ContentList = ({ searchData }) => {
  const [posts, error] = useFetch(`http://localhost:3001/posts`);
  const [filteredData, setFilterdData] = useState([]);
  const navigate = useNavigate();
  const onClickTitle = (id) => {
    navigate(`/view/${id}`);
  };

  useEffect(() => {
    if (posts !== null && searchData !== "") {
      setFilterdData(posts.filter((el) => el.title.includes(searchData)));
    }
  }, [searchData])

  return (
    <ContentListContainer>
      {posts !== null
        ? searchData === ""
          ? posts
              .sort((a, b) => {
                return b.id - a.id;
              })
              .map((el, idx) => {
                return (
                  <TitleList key={idx} onClick={() => onClickTitle(el.id)}>
                    <div className="id">{el.id}</div>
                    <div className="title">{el.title}</div>
                    <div className="createat">{el.createAt}</div>
                  </TitleList>
                );
              })
          : filteredData
              .sort((a, b) => {
                return b.id - a.id;
              })
              .map((el, idx) => {
                return (
                  <TitleList key={idx} onClick={() => onClickTitle(el.id)}>
                    <div className="id">{el.id}</div>
                    <div className="title">{el.title}</div>
                    <div className="createat">{el.createAt}</div>
                  </TitleList>
                );
              })
        : null}
    </ContentListContainer>
  );
};

export default ContentList;

const ContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65rem;
`;

const TitleList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 67rem;
  margin-top: 1.5rem;
  border-radius: 50px;
  border: 1px solid #adb5bd;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .id,
  .title,
  .createat {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .id {
    flex-grow: 1;
  }

  .title {
    flex-grow: 3;
  }

  .createat {
    flex-grow: 1;
  }
`;
