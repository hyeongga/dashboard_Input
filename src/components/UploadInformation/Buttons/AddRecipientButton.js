import styled from "styled-components";
import Text from "../../Text";
import addPerson from "../../../assets/icon/addPerson.svg";

const AddRecipientButton = () => {
  return (
    <Container>
      <img src={addPerson} alt="add" />
      <Text size={14} $weight={500} color="black">
        add recipient
      </Text>
    </Container>
  );
};
const Container = styled.button`
  width: 151px;
  height: 30px;
  margin-left: 56px;

  border-radius: 5px;
  border: 1px solid #b5b5b5;
  background: rgba(217, 217, 217, 0.33);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
`;
export default AddRecipientButton;
