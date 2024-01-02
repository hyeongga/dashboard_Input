import React from "react";
import styled from "styled-components";

const InputWrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: calc(100%-92px);
  background-color: #232323;
  border-radius: 20px;
  padding-left: 46px;
  padding-right: 46px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default InputWrapper;
