import styled from "styled-components";

import Text from "../../../components/Text";
import InputWrapper from "../../../components/UploadInformation/InputWrapper";
import FindButton from "../Buttons/FindButton";

const TrackCard = ({ TrackIndex }) => {
  return (
    <Container>
      <TextWrapper>
        <Text size={20} $weight={700} color="black">
          {TrackIndex}
        </Text>
      </TextWrapper>
      <TrackContainer>
        <InputWrapper title={"Title"} isAsterisk={true} width={"middle"} />
        <ButtonWrapper>
          <InputWrapper title={"mp3"} isAsterisk={true} width={"middle_btn"} />
          <FindButton />
        </ButtonWrapper>
        <InputWrapper title={"Genre"} width={"middle"} />
        <InputWrapper title={"Youtube"} width={"middle"} />
        <InputWrapper title={"Lyrics"} isTextArea={true} />
        <InputWrapper title={"Description"} isTextArea={true} />
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
export default TrackCard;
