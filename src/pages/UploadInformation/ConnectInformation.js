import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";

import UploadButton from "../../components/UploadInformation/Buttons/UploadButton";
import PlusButton from "../../components/UploadInformation/Buttons/PlusButton";
import BoardTitle from "../../components/Dashboard/BoardTitle";
import Text from "../../components/Text";
import ConnectCard from "../../components/UploadInformation/Connect/ConnectCard";
import StepWrapper from "../../components/UploadInformation/StepWrapper";
import Modal from "../../components/UploadInformation/Modal";
import InputWrapper from "../../components/UploadInformation/InputWrapper";
import PriceInputWrapper from "../../components/UploadInformation/PriceInputWrapper";
import BenefitWrapper from "../../components/UploadInformation/Connect/BenefitWrapper";

const ConnectInformation = () => {
  const data = [1, 2, 3, 4];
  return (
    <Container>
      <Modal contents={`Your Soundpack is \nSuccessly Uploaded!`} />
      <UploadButton />
      <TitleWrapper>
        <BoardTitle title={"Connect Information"} color="black" />
        <Text size={14} $weight={400} color={"#000"}>
          커넥트는 팬들이 수집하는 디지털 콘텐츠 카드 입니다. 아티스트 룸에
          입장할 수 있는 key입니다
        </Text>
      </TitleWrapper>

      <InputContainer>
        <InputWrapper
          title={"Amount of kinds"}
          isAsterisk={true}
          width={"small"}
        />
        <InputWrapper title={"Description"} isTextArea={true} />
        <BenefitWrapper />
        <PriceInputWrapper title={"Connect"} />
      </InputContainer>

      <InputContainer>
        <TextWrapper>
          <Text size={14} $weight={400} color={"#000"}>
            커넥트는 최소 3장 이상 업로드해야 합니다.
          </Text>
        </TextWrapper>
        <ConnectWrapper>
          {data.map((v, i) => {
            return <ConnectCard TrackIndex={i + 1} />;
          })}
        </ConnectWrapper>
        <PlusButton />
      </InputContainer>

      <StepWrapper />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  gap: 40px;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  width: 950px;
  position: relative;
  border-radius: 5px;
  background: #efefef;

  padding-top: 30px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  gap: 14px;
  flex-shrink: 0;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TextWrapper = styled.div`
  margin-left: 30px;
`;

const ConnectWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ConnectInformation;
