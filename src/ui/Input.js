import styled from "styled-components"

export const SearchInput = styled.div`
  display: flex;
  width: 31.25rem;
  height: 73px;
  font-size: 30px;

  input{
    width: 100%;
    height: 100%;
    border: 1px solid #adb5bd;
    border-radius: 50px;
    padding: 0;
    font-size: 30px;
    text-indent: 2.5rem;
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  i {
    position: absolute;
    top: 1.3rem;
    right: 2.5rem;
  }
`;