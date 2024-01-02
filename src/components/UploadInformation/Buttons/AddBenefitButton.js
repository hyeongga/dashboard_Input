import styled from "styled-components";
import Text from "../../Text";
import addBenefit from "../../../assets/icon/addBenefit.svg";

const AddBenefitButton = () => {
  return (
    <Container>
      <img src={addBenefit} alt="add" />
      <Text size={14} $weight={500} color="black">
        add
      </Text>
    </Container>
  );
};
const Container = styled.button`
  width: 76px;
  height: 30px;

  border-radius: 5px;
  border: 1px solid #b5b5b5;
  background: rgba(217, 217, 217, 0.33);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
`;
export default AddBenefitButton;
