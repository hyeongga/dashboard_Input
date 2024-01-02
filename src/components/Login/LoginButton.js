import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Text from "../Text";

const LoginButton = ({ logo, social }) => {
  return (
    <Container>
      <ImgWrapper src={logo} alt="logo" />
      <Wrapper>
        <Text
          children={`${social} 계정으로 시작하기`}
          size={14}
          $weight={500}
          color="balck"
          lineHeight="140%"
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: auto;
`;
const Wrapper = styled.div`
  width: 313px;
  padding: 15px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 25px;
  background: #f9f9f9;
  color: black;
`;
const ImgWrapper = styled.img`
  position: absolute;
  left: 32px;
  top: 15px;
  width: 20px;
  height: 20px;
`;

export default LoginButton;
