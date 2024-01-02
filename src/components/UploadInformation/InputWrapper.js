import styled from "styled-components";
import Input from "./Input";
import Text from "../Text";
import asterisk from "../../assets/icon/asterisk.svg";

const InputWrapper = ({ title, isAsterisk, width, isTextArea }) => {
  return (
    <Container>
      <TextWrapper>
        <Text size={16} $weight={700} color="black">
          {`${title} `}
          {isAsterisk && <img src={asterisk} alt="asterisk" />}
        </Text>
      </TextWrapper>
      <Input width={width} isTextArea={isTextArea} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding-left: 30px;
`;
const TextWrapper = styled.div`
  width: 149px;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 9px 0px;
`;
export default InputWrapper;
