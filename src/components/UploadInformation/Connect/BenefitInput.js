import styled from "styled-components";
import Input from "../Input";
import deleteIcon from "../../../assets/icon/delete.svg";

const BenefitInput = () => {
  return (
    <Container>
      {/* <ButtonWrapper> */}
      <Input width={"large"} />
      <img src={deleteIcon} alt="asterisk" />
      {/* </ButtonWrapper> */}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;

const ButtonWrapper = styled.button``;
export default BenefitInput;
