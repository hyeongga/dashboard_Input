import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";

import BoardTitle from "../../components/Dashboard/BoardTitle";
import Text from "../../components/Text";
import StepWrapper from "../../components/UploadInformation/StepWrapper";
import ArtistDataWrapper from "../../components/UploadInformation/ArtistDataWrapper";
import ReviseButton from "../../components/UploadInformation/Buttons/ReviseButton";
import NextPageButton from "../../components/UploadInformation/Buttons/NextPageButton";

const ArtistInformation = () => {
  return (
    <Container>
      <BoardTitle title={"Artist Information"} color="black" />
      <InformationWrapper>
        <ReviseButton />
        <NextPageButton />
        <ArtistDataWrapper
          title={"Artist Name"}
          contents={"수란은 Stasy 솔로 가수로 대표적인"}
        ></ArtistDataWrapper>
        <ArtistDataWrapper
          title={"Artist Image"}
          imageLink={"/"}
        ></ArtistDataWrapper>
        <ArtistDataWrapper title={"Company"}></ArtistDataWrapper>
        <ArtistDataWrapper
          title={"Description"}
          contents={
            "수란은 Stasy 솔로 가수로 대표적인 장르로는 힙합, 알앤비, 팝, 최근에는 발라드도 하고 있다. 여러 가수들에게 뜨겁게 러브콜을 받고 있으며, 이미 수많은 가수들의 곡에 작사나 작곡, 피처링으로 참여했다. 알앤비 가수이자, 송라이팅에서 프로듀싱까지 다방면으로 재주가 많은 싱어송라이터이다."
          }
        ></ArtistDataWrapper>
      </InformationWrapper>
      <StepWrapper />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InformationWrapper = styled.div`
  width: 950px;
  height: 493px;
  padding-top: 40px;

  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 30px;

  border-radius: 5px;
  background: #e1f5f4;
`;

export default ArtistInformation;
