import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";
import SaveButton from "../../components/UploadInformation/Buttons/SaveButton";
import FindButton from "../../components/UploadInformation/Buttons/FindButton";
import BoardTitle from "../../components/Dashboard/BoardTitle";
import Text from "../../components/Text";
import InputWrapper from "../../components/UploadInformation/InputWrapper";

import StepWrapper from "../../components/UploadInformation/StepWrapper";
import Modal from "../../components/UploadInformation/Modal";

const ArtistInformation = () => {
  return (
    <Container>
      <TitleWrapper>
        <BoardTitle title={"Artist Information"} color="black" />
        <Text $weight={400} color={"#000"} size={14}>
          아티스트 정보를 먼저 저장해 주세요.
        </Text>
      </TitleWrapper>
      <InformationContainer>
        <SaveButton />
        <InputWrapper
          title={"Artist Name"}
          isAsterisk={true}
          width={"middle"}
        />
        <ButtonWrapper>
          <InputWrapper title={"Artist Image"} width={"middle_btn"} />
          <FindButton />
        </ButtonWrapper>
        <InputWrapper title={"Company"} isAsterisk={true} width={"middle"} />
        <InputWrapper
          title={"Description"}
          isAsterisk={true}
          isTextArea={true}
        />
      </InformationContainer>
      <StepWrapper />
      <Modal contents={`Your artist information is\n Saved!`} />
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

const InformationContainer = styled.div`
  width: 100%;
  height: 403px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  gap: 14px;

  border-radius: 5px;
  background: #efefef;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;
export default ArtistInformation;
