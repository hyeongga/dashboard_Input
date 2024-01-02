import styled from "styled-components";

import ItemContainer from "./ItemContainer";
import ListBox from "../ListBox";
import { useContext } from "react";
import { AppContext } from "../../../App";

const SuperFanTable = ({ superFanList }) => {
  // const teamTitle = [
  //   { value: "User Name", size: "140px" },
  //   { value: "Wallet Address", size: "400px" },
  //   { value: "Percentage", size: "140px" },
  // ];
  // const superFansTitle = [
  //   { value: "User Name", size: "140px" },
  //   { value: "Wallet Address", size: "400px" },
  //   { value: "Percentage", size: "140px" },
  // ];

  return (
    <SuperFanContainer>
      <ListBox
        title={
          <ItemContainer
            UserName="User Name"
            WalletAddress="Wallet Address"
            Connect="Connect"
            FirstMeet="First Meet"
            // title={title}
          />
        }
        content={superFanList.map((v) => (
          <ItemContainer
            UserName={v.name}
            WalletAddress={v.wallet}
            Connect={v.connectCount}
            FirstMeet={v.firstMeetDate}
          />
        ))}
        flexDirection="column"
      />
    </SuperFanContainer>
  );
};
const SuperFanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export default SuperFanTable;
