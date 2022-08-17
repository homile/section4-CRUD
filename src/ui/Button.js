import styled from "styled-components";

export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backgroundcolor || "#74c0fc"};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "60px"};
  font-size: ${(props) => props.fontsize || "38px"};
  cursor: pointer;
  border-radius: 20px;

  &:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
