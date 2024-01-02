import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../App";

import Text from "../../Text";
import Button from "../Button";
import profileSample from "../../../assets/icon/profileSample.svg";

const ArtistInfoBox = ({ nickName }) => {
  /* Link값 연결해주기*/

  console.log("nick", nickName);
  // const { cookieEarning, fanNumber } = useContext(AppContext);

  return (
    <Container>
      <ProfileWrapper>
        <Profile src={profileSample} alt="profile" />
        <ContentWrapper>
          <TextWrapper>
            <Text children={nickName} $weight={700} color="black" size={30} />
          </TextWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              bgColor="#00c4b9"
              fontColor="black"
              children="Artist Information"
            />
          </Link>
        </ContentWrapper>
      </ProfileWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 480px;
  height: 180px;
  flex-shrink: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
const ProfileWrapper = styled.div`
  display: flex;
  padding: 0px 30px;
  align-items: flex-start;
  gap: 30px;
`;
const ContentWrapper = styled.div`
  display: flex;
  height: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;
const Profile = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  background-color: aqua;
`;
const TextWrapper = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: flex-start;
  gap: 10px;
`;

export default ArtistInfoBox;
