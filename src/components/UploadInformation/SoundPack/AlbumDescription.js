import styled from "styled-components";

import asterisk from "../../../assets/icon/asterisk.svg";
import Text from "../../Text";
import Input from "../Input";
const AlbumDescription = () => {
  return (
    <Container>
      <TitleWrapper>
        <TextWrapper>
          <Text size={16} $weight={700} color="black">
            Album Description
          </Text>
        </TextWrapper>
        <img src={asterisk} alt="asterisk" />
      </TitleWrapper>
      <Input isTextArea={true} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding-left: 30px;
`;
const TextWrapper = styled.div`
  width: 90px;
  height: 42px;
  display: flex;
  justify-content: start;
  align-items: start;
`;

const TitleWrapper = styled.div`
  width: 149px;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 9px 0px;
  gap: 10px;
`;
export default AlbumDescription;
