import styled from "styled-components";
import Input from "../Input";
import Text from "../../Text";
import asterisk from "../../../assets/icon/asterisk.svg";
import BenefitInput from "./BenefitInput";
import AddBenefitButton from "../Buttons/AddBenefitButton";
const BenefitWrapper = () => {
  const data = [1, 2, 3];
  return (
    <Container>
      <TextWrapper>
        <Text size={16} $weight={700} color="black">
          Benefit
        </Text>
        <img src={asterisk} alt="asterisk" />
      </TextWrapper>
      <InputWrapper>
        {data.map((v) => {
          return <BenefitInput />;
        })}
        <AddBenefitButton />
      </InputWrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  padding-left: 30px;
`;
const TextWrapper = styled.div`
  width: 149px;
  height: fit-content;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  padding: 9px 0px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 14px;
`;
export default BenefitWrapper;
