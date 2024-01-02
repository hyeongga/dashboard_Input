import styled from "styled-components";
const RecipientSelect = () => {
  return (
    <Container>
      <option value="dog">Dog</option>
    </Container>
  );
};
const Container = styled.select`
  width: 250px;
  height: 40px;
  padding-left: 6px;

  background: transparent;
  border: 1px solid #b5b5b5;

  font-size: 18px;
  font-family: "DM Sans";
`;
export default RecipientSelect;
