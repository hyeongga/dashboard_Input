import styled from "styled-components";
import asterisk from "../../assets/icon/asterisk.svg";
import Text from "../Text";
import Input from "./Input";

const PriceInputWrapper = ({ title }) => {
  return (
    <Container>
      <Text size={16} $weight={700} color="black">
        {title} (Cookie)
      </Text>
      <ImageWrapper>
        <img src={asterisk} alt="asterisk" />
      </ImageWrapper>
      <InputWrapper>
        <Input width={"small"} />
      </InputWrapper>
      <Text size={18} $weight={500} color="black">
        cookies
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-left: 30px;
  align-items: center;
  justify-content: start;
`;
const InputWrapper = styled.div`
  margin-left: 63px;
  margin-right: 10px;
`;
const ImageWrapper = styled.div`
  margin-left: 6px;
`;
export default PriceInputWrapper;
