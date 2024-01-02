import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Container onClick={() => props.onClick} {...props}>
      {props.children}
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  width: auto;
  border-radius: ${(props) =>
    props.large ? "12px" : props.regular ? "6px" : "6px"};
  padding: 0px 12px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) =>
    props.large ? "64px" : props.regular ? "50px" : "50px"};
  font-size: ${(props) =>
    props.large ? "30px" : props.regular ? "22px" : "22px"};
`;

export default Button;
