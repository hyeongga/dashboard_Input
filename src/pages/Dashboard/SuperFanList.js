import { useContext } from "react";
import BoardTitle from "../../components/Dashboard/BoardTitle";
import SuperFanTable from "../../components/Dashboard/SuperFanList/SuperFanTable";
import { AppContext } from "../../App";

const SuperFanList = () => {
  const { superFanList } = useContext(AppContext);

  return (
    <>
      <BoardTitle title="Super Fans" color="black" />
      <SuperFanTable superFanList={superFanList} />
    </>
  );
};

export default SuperFanList;
