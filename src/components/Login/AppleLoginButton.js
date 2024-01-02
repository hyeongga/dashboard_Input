import axios from "axios";
import AppleSignin from "react-apple-signin-auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LoginButton from "./LoginButton";
import appleLogo from "../../assets/icon/appleLogo.svg";

const AppleLoginButton = () => {
  const navigate = useNavigate();

  const getJwtFromServer = async (idToken) => {
    try {
      const response = await axios.post(
        "https://api.cookiedog.xyz/auth/login",
        {
          params: {
            type: "apple",
            device: "webapp",
            idToken: idToken,
          },
        }
      );
      console.log("JWT:", response.data.data.idToken);
      localStorage.setItem("cookiedogToken", response.data.data.idToken);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <>
      <AppleSignin
        authOptions={{
          clientId: "xyz.cookiedog.api",
          scope: "email name",
          redirectURI: "https://apple-login-test-three.vercel.app/login", //change uri
          nonce: "nonce",
          usePopup: true,
        }}
        onSuccess={async (response) => {
          getJwtFromServer(response.authorization.id_token);
        }}
        onError={(error) => console.error(error)}
        render={(props) => {
          return (
            <Container {...props}>
              <LoginButton social="Apple" logo={appleLogo} />
            </Container>
          );
        }}
      />
    </>
  );
};

const Container = styled.button`
  padding: 0%;
  margin: 0%;
  background-color: transparent;
  border: 0;
`;

export default AppleLoginButton;
