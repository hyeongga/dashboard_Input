import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "./Text";
import cookiedogLogo from "../assets/icon/cookiedogLogo.svg";
import home from "../assets/icon/home.svg";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImage src={cookiedogLogo} alt="cookiedogLogo" />
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Menu>
            <img src={home} alt="home" />
            <Text children="Dashboard" />
          </Menu>
        </Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #212b36;
  width: 18%;
  min-width: 180px;
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const LogoImage = styled.img`
  margin-bottom: 40px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  background: none;
`;

export default Sidebar;
