import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";

import BoardTitle from "../../components/Dashboard/BoardTitle";
import ProfileWrap from "../../components/Dashboard/ArtistProfile/ProfileWrap";
import SoundPackWrap from "../../components/Dashboard/SoundPackList/SoundPackWrap";
import SuperFanWrap from "../../components/Dashboard/SuperFanList/SuperFanWrap";
import SuperFanList from "./SuperFanList";
import { redirect } from "react-router-dom";
// import SuperFanTable from "../../components/Dashboard/SuperFanList/SuperFanTable";

const DashboardHome = () => {
  const {
    superFanTop10,
    setFanNumber,
    setNickName,
    setCookieEarning,
    setSuperFanList,
    setSoundPackList,
    setSuperFanTop10,
  } = useContext(AppContext);
  const [recentSoundPack, setRecentSoundPack] = useState([]);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://api.cookiedog.xyz/dashboard/user",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("cookiedogToken")}`,
          },
        }
      );
      setNickName(response.data.data.name);
      setCookieEarning(response.data.data.cookie);
    } catch (error) {
      console.error(error);
    }
  };

  const getSoundPack = async () => {
    try {
      const response = await axios.get(
        "https://api.cookiedog.xyz/dashboard/soundpack",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("cookiedogToken")}`,
          },
        }
      );
      setSoundPackList(response.data.data.soundPackList);
      setRecentSoundPack(response.data.data.soundPackList.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
  };

  const getSuperFan = async () => {
    try {
      const response = await axios.get(
        "https://api.cookiedog.xyz/dashboard/fan",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("cookiedogToken")}`,
          },
        }
      );
      setFanNumber(response.data.data.totalCount);
      setSuperFanList(response.data.data.fanList);
      setSuperFanTop10(response.data.data.fanList.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
    getSoundPack();
    getSuperFan();
  }, []);

  return (
    <BackgroundLayout>
      <Container>
        <BoardTitle title="Dashboard" color="white" btn={true} path="/" />
        <ProfileWrap />
        <SoundPackWrap soundPackData={recentSoundPack} />
        <SuperFanWrap superFanList={superFanTop10} />
      </Container>
    </BackgroundLayout>
  );
};

const BackgroundLayout = styled.div`
  width: 100%;
  height: 226px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #00c5b9;
`;

const Container = styled.div`
  width: 980px;
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default DashboardHome;
