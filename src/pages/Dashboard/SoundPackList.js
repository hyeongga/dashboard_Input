import styled from "styled-components";
import { useState, useEffect } from "react";

import SoundPack from "../../components/Dashboard/SoundPackList/SoundPack";
import ListBox from "../../components/Dashboard/ListBox";
import BoardTitle from "../../components/Dashboard/BoardTitle";

import axios from "axios";

const SoundPackList = () => {
  const [activeSoundPack, setActiveSoundPack] = useState([]);
  const [expiredSoundPack, setExpiredSoundPack] = useState([]);

  const getSoundPackData = async () => {
    try {
      const response = await axios.get(
        "https://api.cookiedog.xyz/dashboard/soundpack",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("cookiedogToken")}`,
          },
        }
      );

      const expired = response.data.data.soundPackList.filter(
        (item) => item.isExpired === true
      );
      const active = response.data.data.soundPackList.filter(
        (item) => item.isExpired === false
      );

      setExpiredSoundPack(expired);
      setActiveSoundPack(active);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSoundPackData();
  }, []);

  useEffect(() => {
    console.log("active:", activeSoundPack, "expired:", expiredSoundPack);
  }, [activeSoundPack, expiredSoundPack]);

  return (
    <>
      <BoardTitle title="Sound Pack" color="black" />

      <ListBox
        title={<Title>Active</Title>}
        content={
          <SoundPackWrapper>
            {expiredSoundPack.map((soundPack) => (
              <SoundPack
                img={soundPack.albumCover}
                soundPackTitle={soundPack.albumName}
                boxSize={"170px"}
              />
            ))}
          </SoundPackWrapper>
        }
      />
      <ListBox
        title={<Title>Expired</Title>}
        content={
          <SoundPackWrapper>
            {activeSoundPack.map((soundPack) => (
              <SoundPack
                img={soundPack.albumCover}
                soundPackTitle={soundPack.albumName}
                boxSize={"170px"}
              />
            ))}
          </SoundPackWrapper>
        }
      />
    </>
  );
};

const Title = styled.div`
  margin-left: 40px;
  font-weight: 700;
  font-size: 20px;
  color: "black";
  font-family: "DM Sans";
`;

const SoundPackWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin: 20px;
  justify-items: center;
  align-items: center;
  /* background-color: red; */
`;
export default SoundPackList;
