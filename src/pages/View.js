import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../ui/Button";
import useFetch from "../util/useFetch";

const View = () => {
  const { id } = useParams(null);
  const [modifyMode, setModifyMode] = useState(false);
  const [modifyData, setModifyData] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();
  const [posts, error] = useFetch(`http://localhost:3001/posts/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json)
      .catch((err) => console.log(err));

    navigate("/");
  };

  const handleModifyMode = () => {
    setModifyMode(true);
  };

  const handleCancel = () => {
    setModifyMode(false);
  };

  const titleChange = (e) => {
    setModifyData({ ...modifyData, title: e });
  };

  const contentChange = (e) => {
    setModifyData({ ...modifyData, content: e });
  };

  const handleModify = () => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...posts, ...modifyData, updateAt:new Date().toLocaleDateString()}),
    })
      .then((res) => res.json, setModifyMode(false), window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <ViewContainer>
      {posts !== null ? (
        modifyMode === false ? (
          <>
            <ContentContainer>
              <div className="title">
                <h1>{posts.title}</h1>
              </div>
              <hr />
              <div className="info">
                <div className="user">{posts.user}</div>
                <div className="createat">{posts.createAt}</div>
              </div>
              <div className="content">{posts.content}</div>
            </ContentContainer>
            <ButtonContainer>
              <PrimaryButton backgroundcolor="#868E96" onClick={handleDelete}>
                삭제하기
              </PrimaryButton>
              <PrimaryButton onClick={handleModifyMode}>수정하기</PrimaryButton>
            </ButtonContainer>
          </>
        ) : (
          <>
            <ContentContainer>
              <div className="title">
                <input
                  defaultValue={posts.title}
                  onChange={(e) => titleChange(e.target.value)}
                />
              </div>
              <hr />
              <div className="info">
                <div className="user">{posts.user}</div>
                <div className="createat">{posts.createAt}</div>
              </div>
              <textarea
                defaultValue={posts.content}
                onChange={(e) => contentChange(e.target.value)}
              />
            </ContentContainer>
            <ButtonContainer>
              <PrimaryButton backgroundcolor="#868E96" onClick={handleCancel}>
                취소
              </PrimaryButton>
              <PrimaryButton onClick={handleModify}>수정</PrimaryButton>
            </ButtonContainer>
          </>
        )
      ) : null}
    </ViewContainer>
  );
};

export default View;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65rem;
  height: 100%;
  border: 1px solid black;
  border-radius: 25px;
  margin: 2rem 0;
  padding: 0 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 50rem;
  padding: 2rem 4rem 2rem 4rem;

  .title {
    display: flex;
    align-items: center;
    flex-grow: 0.3;

    input {
      width: 64.7rem;
      border-radius: 10px;
      border: 1px solid black;
      font-size: 38px;
      text-indent: 2rem;
      height: 5rem;
    }
  }

  .info {
    display: flex;
    justify-content: right;
    padding-top: 1rem;
    flex-grow: 0.3;
    font-size: 28px;
    width: 100%;

    div {
      padding-left: 1.5rem;
    }
  }

  .content {
    flex-grow: 3;
    font-size: 38px;
  }

  hr {
    width: 100%;
    border: 0.5px solid #adb5bd;
  }

  textarea {
    height: 100%;
    width: 61rem;
    font-size: 38px;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid black;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;

  div {
    margin-left: 2rem;
  }
`;
