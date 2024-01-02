import styled from "styled-components";
import Input from "./Input";
import Text from "../Text";
import asterisk from "../../assets/icon/asterisk.svg";

const ArtistDataWrapper = ({ title, contents, imageLink }) => {
  return (
    <Container>
      <TextWrapper>
        <Text size={16} weight={700} color="black" lineHeight="normal">
          {`${title} `}
        </Text>
      </TextWrapper>
      {imageLink ? (
        <ImageWrapper className="width">
          <img src="" alt="ProfileImage" width={"111px"} height={"111px"} />
        </ImageWrapper>
      ) : (
        <PWrapper>
          <Text
            size={18}
            weight={500}
            color="rgba(0, 0, 0, 0.50)"
            lineHeight="normal"
          >
            {contents}
          </Text>
        </PWrapper>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  padding-left: 30px;
`;
const TextWrapper = styled.div`
  width: 149px;
  display: flex;
  justify-content: start;
  align-items: start;
`;
const ImageWrapper = styled.div`
  width: 111px;
  height: 111px;
  background-color: #808080;
`;
const PWrapper = styled.div`
  width: 630px;
  display: flex;
  justify-content: start;
  align-items: start;
  word-break: break-all;
`;
export default ArtistDataWrapper;
