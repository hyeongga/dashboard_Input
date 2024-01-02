import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { provider, signInWithPopup, auth, signOut } from "../Firebase";

const path = [
  { name: "Sound Pack", path: "/album" },
  { name: "Artist", path: "/artist" },
  { name: "Event", path: "/event" },
];

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  const logIn = () =>
    signInWithPopup(auth, provider).then((result) => {
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setIsSignIn(true);
      alert("로그인 완료");
      console.log(user);
    });

  const logOut = () =>
    signOut(auth)
      .then(() => {
        setIsSignIn(false);
        alert("로그아웃 완료");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) setIsSignIn(true);
    else setIsSignIn(false);
  }, []);

  return (
    <Container>
      <Wrapper>
        {path.map((e) => {
          return (
            <Box key={e.path} onClick={() => navigate(e.path)}>
              {e.name}
            </Box>
          );
        })}
      </Wrapper>
      <Wrapper>
        <Box
          onClick={() => {
            isSignIn ? logOut() : logIn();
          }}
        >
          {isSignIn ? "로그아웃" : "로그인"}
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 130px - 130px);
  padding-left: 130px;
  padding-right: 130px;
  margin-top: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  cursor: pointer;
  width: 158px;
  background-color: #232323;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 8px;
  font-size: 20;
`;

export default Header;
