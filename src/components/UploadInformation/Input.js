import React from "react";
import styled from "styled-components";

const Input = ({ width, isTextArea }) => {
  return (
    <>{isTextArea ? <TextArea /> : <InputText width={width}></InputText>}</>
  );
};

const InputText = styled.input`
  width: ${(props) =>
    props.width === "small"
      ? "115px"
      : props.width === "middle"
      ? "320px"
      : props.width === "middle_btn"
      ? "250px"
      : props.width === "large"
      ? "630px"
      : "50px"};
  height: 40px;
  padding-left: 6px;

  background: transparent;
  border: 1px solid #b5b5b5;

  font-size: 18px;
  font-family: "DM Sans";
`;

const TextArea = styled.textarea`
  width: 630px;
  height: 158px;
  padding-left: 6px;

  background-color: transparent;
  border: 1px solid #b5b5b5;

  font-family: "DM Sans";
  font-size: 18px;
`;

export default Input;
