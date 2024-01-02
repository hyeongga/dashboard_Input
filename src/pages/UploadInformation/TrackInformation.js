import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";

import NextPageButton from "../../components/UploadInformation/Buttons/NextPageButton";
import PlusButton from "../../components/UploadInformation/Buttons/PlusButton";
import BoardTitle from "../../components/Dashboard/BoardTitle";
import Text from "../../components/Text";
import TrackCard from "../../components/UploadInformation/Track/TrackCard";
import StepWrapper from "../../components/UploadInformation/StepWrapper";

const TrackInformation = () => {
  const data = [1, 2, 3, 4];
  return (
    <Container>
      <TitleWrapper>
        <BoardTitle title={"Track Information"} color="black" />
        <Text size={14} $weight={400} color={"#000"}>
          앨범 내 곡 정보를 입력해 주세요.
        </Text>
      </TitleWrapper>
      <InputContainer>
        <NextPageButton />
        <TextWrapper>
          <Text size={22} $weight={700} color={"#000"}>
            Track list
          </Text>
        </TextWrapper>
        <TrackWrapper>
          {data.map((v, i) => {
            return <TrackCard TrackIndex={i + 1} />;
          })}
        </TrackWrapper>
        <PlusButton />
      </InputContainer>

      <StepWrapper />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  width: 950px;
  position: relative;

  padding-top: 30px;
  padding-bottom: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #efefef;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TextWrapper = styled.div`
  margin-left: 42px;
`;

const TrackWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default TrackInformation;
