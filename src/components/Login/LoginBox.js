import styled from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../Login/GoogleLoginButton";
import AppleLoginButton from "../Login/AppleLoginButton";
import LoginTextBox from "../Login/LoginTextBox";

const LoginBox = () => {
  return (
    <Container>
      <LoginTextBox />
      <ButtonWrapper>
        <GoogleOAuthProvider
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        >
          <GoogleLoginButton />
        </GoogleOAuthProvider>
        <AppleLoginButton />
      </ButtonWrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 345px;
  height: 380px;
  border-radius: 16px;
  background-color: black;
  padding: 70px 34px 34px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default LoginBox;
