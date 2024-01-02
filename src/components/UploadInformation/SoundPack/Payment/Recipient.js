import styled from "styled-components";

import Text from "../../../Text";
import Input from "../../Input";
import RecipientSelect from "./RecipentSelect";
import deleteIcon from "../../../../assets/icon/delete.svg";
const Recipient = ({ index }) => {
  return (
    <Container>
      <TextWrapper>
        <Text size={20} $weight={700} color="black">
          {index}
        </Text>
      </TextWrapper>
      <RecipientSelect />

      <Text size={22} $weight={600} color="black">
        /
      </Text>
      <Input width={"small"} />
      <DeleteButton onClick={""}>
        <img src={deleteIcon} alt="delete" />
      </DeleteButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TextWrapper = styled.div`
  width: 21px;
  height: 21px;
  margin-left: 5px;
  margin-right: 20px;
`;
const DeleteButton = styled.button`
  border: none;
`;

export default Recipient;
