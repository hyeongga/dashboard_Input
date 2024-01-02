import styled from "styled-components";
import plus from "../../../assets/icon/plus.svg";
const PlusButton = () => {
  return (
    <Container>
      <ButtonWrapper>
        <img src={plus} alt="add" />
      </ButtonWrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border: none;
`;

export default PlusButton;
