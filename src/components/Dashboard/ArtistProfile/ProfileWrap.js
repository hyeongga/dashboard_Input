import styled from "styled-components";
import { useContext } from "react";

import ItemSmallBox from "./ItemSmallBox";
import ItemLargeBox from "./ItemLargeBox";
import { AppContext } from "../../../App";

const Profile = () => {
  const { cookieEarning, fanNumber, nickName } = useContext(AppContext);

  return (
    <Container>
      <ItemLargeBox nickName={nickName} />
      <ItemSmallBox title="Cookie Earning" content={cookieEarning} />
      <ItemSmallBox title="Super Fans" content={fanNumber} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export default Profile;
