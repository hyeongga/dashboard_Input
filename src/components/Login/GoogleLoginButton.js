import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import LoginButton from "./LoginButton";
import googleLogo from "../../assets/icon/googleLogo.svg";
import { signInWithPopup, provider, auth } from "../../Firebase.js";
import { useContext } from "react";
import { AppContext } from "../../App.js";

const GoogleLoginButton = () => {
  const { setIsLogin } = useContext(AppContext);

  const navigate = useNavigate();
  const getJwtFromServer = async (idToken) => {
    try {
      const response = await axios.post(
        "https://api.cookiedog.xyz/auth/login",
        {
          type: "google",
          device: "webapp",
          idToken: idToken,
        }
      );
      setIsLogin(true); //수정 및 확인 필요 true로 변경 안되는것 같음
      console.log("JWT1:", response.data.data.id_token);
      localStorage.setItem("cookiedogToken", response.data.data.id_token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  const getIdTokenFromFirebase = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      await getJwtFromServer(result.user.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container onClick={getIdTokenFromFirebase}>
      <LoginButton social="Google" logo={googleLogo} />
    </Container>
  );
};

const Container = styled.button`
  padding: 0%;
  margin: 0%;
  background-color: transparent;
  border: 0;
`;

export default GoogleLoginButton;
