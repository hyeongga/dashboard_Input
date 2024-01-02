import styled from "styled-components";
import { useState, useContext } from "react";
import { AppContext } from "../../App";
import LoginBox from "../../components/Login/LoginBox";

const Login = () => {
  const { isLogin } = useContext(AppContext);
  console.log(isLogin);
  return (
    <Container>
      <LoginBox />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Login;
