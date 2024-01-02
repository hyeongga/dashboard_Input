import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";

import FindButton from "../../components/UploadInformation/Buttons/FindButton";
import BoardTitle from "../../components/Dashboard/BoardTitle";
import InputWrapper from "../../components/UploadInformation/InputWrapper";
import DateSelectWrapper from "../../components/UploadInformation/SoundPack/DateSelectWrapper";
import AlbumDescription from "../../components/UploadInformation/SoundPack/AlbumDescription";
import PriceInputWrapper from "../../components/UploadInformation/PriceInputWrapper";
import Payment from "../../components/UploadInformation/SoundPack/Payment/Payment";
import StepWrapper from "../../components/UploadInformation/StepWrapper";
import NextPageButton from "../../components/UploadInformation/Buttons/NextPageButton";

const SoundPackInformation = () => {
  return (
    <Container>
      <BoardTitle title={"SoundPack(Album) Information"} color="black" />

      <InputContainer height={492}>
        <NextPageButton />
        <InputWrapper title={"Album Name"} isAsterisk={true} width={"middle"} />
        <ButtonWrapper>
          <InputWrapper
            title={"Album Cover"}
            isAsterisk={true}
            width={"middle_btn"}
          />
          <FindButton />
        </ButtonWrapper>

        <DateSelectWrapper title={"Release Date"} isAsterisk={true} />
        <DateSelectWrapper title={"Expire Date"} isAsterisk={true} />
        <InputWrapper title={"유통사"} width={"middle"} />

        <AlbumDescription />
      </InputContainer>
      <InputContainer>
        <PriceInputWrapper title={"Album"} />
        <Payment />
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
  padding-top: 30px;
  padding-bottom: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #efefef;

  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  gap: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

export default SoundPackInformation;
