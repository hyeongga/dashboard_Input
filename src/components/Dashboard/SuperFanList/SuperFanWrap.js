import styled from "styled-components";

import BoardSubTitle from "../BoardSubTitle";
import SuperFanTable from "./SuperFanTable";

const SuperFanWrap = ({ superFanList }) => {
  return (
    <Container>
      <BoardSubTitle title="Super Fans" path="/dashboard/superfan" />
      <SuperFanTable superFanList={superFanList} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export default SuperFanWrap;
