import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PrimaryButton } from "../ui/Button";

const Create = () => {
  const navigate = useNavigate();

  const [validation, setValidation] = useState(false);
  const [board, setBoard] = useState({
    title: "",
    user: "",
    content: "",
    createAt: new Date().toLocaleDateString(),
    updateAt: null,
  });

  useEffect(() => {

  }, [board])

  const onTitleChange = (e) => {
    setBoard({ ...board, title: e });
  };

  const onUserChange = (e) => {
    setBoard({ ...board, user: e });
  };

  const onContentChange = (e) => {
    setBoard({ ...board, content: e });
  };

  const cancelHandler = () => {
    setBoard({
      title: "",
      user: "",
      content: "",
      createAt: null,
      updateAt: null,
    });
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(board.title !== "" && board.user !== "" && board.content !== ""){
      fetch("http://localhost:3001/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(board),
    })
      .then(
        (res) => res.json,
        navigate("/")
      )
      .catch((err) => console.log(err));
    }
  };

  return (
    <CreateContainer>
      <CreateInputContainer>
        <div className="top">
          <input
            id="title"
            placeholder="제목을 입력하세요."
            onChange={(e) => onTitleChange(e.target.value)}
          />
          <input
            id="user"
            placeholder="작성자를 입력하세요."
            onChange={(e) => onUserChange(e.target.value)}
          />
        </div>
        <div className="content">
          <textarea
            id="contentarea"
            placeholder="내용을 입력하세요."
            onChange={(e) => onContentChange(e.target.value)}
          />
        </div>
      </CreateInputContainer>
      <ButtonContainer>
        <PrimaryButton backgroundcolor="#868E96" onClick={cancelHandler}>
          취소
        </PrimaryButton>
        <PrimaryButton onClick={handleSubmit}>작성</PrimaryButton>
      </ButtonContainer>
    </CreateContainer>
  );
};

export default Create;

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65rem;
  height: 100%;
`;

const CreateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 74rem;
  height: 56rem;
  padding: 2rem;

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #title,
  #user {
    height: 4rem;
    margin: 2rem;
    border: 1px solid black;
    border-radius: 25px;
    text-indent: 2rem;
  }

  #title {
    width: 45rem;
    font-size: 28px;
  }

  #user {
    width: 15rem;
    font-size: 20px;
  }

  .content {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  #contentarea {
    width: 62.5rem;
    font-size: 28px;
    border: 1px solid black;
    border-radius: 25px;
    padding: 2rem 0 0 2rem;
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
