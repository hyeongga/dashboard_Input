import styled from "styled-components";

import Text from "../../Text";
import InputWrapper from "../InputWrapper";
import FindButton from "../Buttons/FindButton";

const ConnectCard = ({ TrackIndex }) => {
  return (
    <Container>
      <TextWrapper>
        <Text size={20} $weight={700} color="black">
          {TrackIndex}
        </Text>
      </TextWrapper>
      <TrackContainer>
        <ButtonWrapper>
          <InputWrapper title={"Original"} width={"middle_btn"} />
          <FindButton />
        </ButtonWrapper>
        <ButtonWrapper>
          <InputWrapper title={"Thumbnail"} width={"middle_btn"} />
          <FindButton />
        </ButtonWrapper>
        <InputWrapper title={"Type"} width={"middle"} />
      </TrackContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px;
`;
const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;
const TextWrapper = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;
export default ConnectCard;
